import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { dropSecondColumn } from "../actions/workstation";

const LoadPagination = () => {
  const rooms = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();

  let names = rooms.map(function (room) {
    return room.nameOfTemplate;
  });
  let heights = rooms.map(function (room) {
    return room.height;
  });
  let widths = rooms.map(function (room) {
    return room.width;
  });
  let accessPoints = rooms.map(function (room) {
    return room.accessPointBadge;
  });
  let exhibits = rooms.map(function (room) {
    return room.exhibitBadge;
  });

  const handleRowClick = (roomId) => {
    // insert code
    const objectArray = Object.entries(rooms);

    objectArray.forEach(([key, value]) => {
      let stamos = Object.values(value);
      console.log(stamos);
    });

    dispatch(dropSecondColumn());
  };

  let data = [];
  for (let roomId = 0; roomId < names.length; roomId++) {
    data[roomId] = {
      name: names[roomId],
      height: heights[roomId],
      width: widths[roomId],
      accessPoints: accessPoints[roomId],
      exhibits: exhibits[roomId],
      clickEvent: () => handleRowClick(roomId),
    };
  }

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Height",
        field: "height",
        sort: "asc",
        width: 100,
      },
      {
        label: "Width",
        field: "width",
        sort: "asc",
        width: 100,
      },
      {
        label: "Access Points (Num)",
        field: "accessPoints",
        sort: "asc",
        width: 100,
      },
      {
        label: "Exhibits (Num)",
        field: "exhibits",
        sort: "asc",
        width: 100,
      },
    ],
    rows: data,
  });

  return (
    <MDBDataTableV5
      striped
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      fullPagination
      theadTextWhite
      tbodyTextWhite
      style={{
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    />
  );
};

export default LoadPagination;
