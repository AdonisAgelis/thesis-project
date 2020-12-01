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
    return room.widths;
  });
  var accessPoints = rooms.map(function (room) {
    return room.accessPointBadge;
  });
  var exhibits = rooms.map(function (room) {
    return room.exhibitBadge;
  });

  console.log(names);
  console.log(heights);

  const george = [{ name: "stamos" }, { name: "john" }];

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
        field: "Height",
        sort: "asc",
        width: 100,
      },
      {
        label: "Width",
        field: "Width",
        sort: "asc",
        width: 100,
      },
      {
        label: "Access Points (Num)",
        field: "Access Points",
        sort: "asc",
        width: 100,
      },
      {
        label: "Exhibits (Num)",
        field: "Exhibits",
        sort: "asc",
        width: 100,
      },
    ],
    rows: george,
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
