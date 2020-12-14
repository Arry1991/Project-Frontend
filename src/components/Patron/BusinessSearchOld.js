import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Link } from "react-router-dom";

const BusinessSearch = () => {
  let url = "/react-backend/displayAllBusiness.php";
  //Named Rows so it will work with MDBreact Table
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((json) => {
        setRows(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Column headings for MDBreact table
  const columns = [
    {
      label: "Business",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Type",
      field: "type",
      sort: "asc",
      width: 270,
    },
    {
      label: "Street",
      field: "street",
      sort: "asc",
      width: 150,
    },
    {
      label: "Town",
      field: "town",
      sort: "asc",
      width: 200,
    },
    {
      label: "Zip",
      field: "zip",
      sort: "asc",
      width: 100,
    },
    {
      label: "County",
      field: "county",
      sort: "asc",
      width: 100,
    },
    {
      label: "Link",
      field: "link",
      sort: "asc",
      width: 100,
    },
  ];

  // Merge columns + rows so it works with MDBDataTable
  rows.link = "HELP";
  const tableData = { columns, rows };

  // Render Table Function. Creates Sortable Table with MDB React
  const renderTable = () => {
    return <MDBDataTable striped hover bordered data={tableData} />;
  };

  return <div>{renderTable()}</div>;
};
export default BusinessSearch;
