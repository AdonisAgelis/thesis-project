import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";

const LoadPagination = () => {
  const rooms = useSelector((state) => state.messageReducer.message);

  var names = rooms.map(function (room) {
    return room.nameOfTemplate;
  });
  var heights = rooms.map(function (room) {
    return room.height;
  });
  var widths = rooms.map(function (room) {
    return room.width;
  });
  var accessPoints = rooms.map(function (room) {
    return room.accessPointBadge;
  });
  var exhibits = rooms.map(function (room) {
    return room.exhibitBadge;
  });

  let data = [];
  for (var x = 0; x < names.length; x++) {
    data[x] = {
      name: names[x],
      height: heights[x],
      width: widths[x],
      accessPoints: accessPoints[x],
      exhibits: exhibits[x],
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
