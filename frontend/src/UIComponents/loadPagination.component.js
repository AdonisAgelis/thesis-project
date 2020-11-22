import React from "react";
import { MDBDataTableV5 } from "mdbreact";

const LoadPagination = () => {
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
  });

  return (
    <MDBDataTableV5
      striped
      bordered
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      fullPagination
      theadTextWhite
      tbodyTextWhite
      style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
    />
  );
};

export default LoadPagination;
