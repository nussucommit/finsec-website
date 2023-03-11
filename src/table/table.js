import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";

export const RFPTable = () => {
  return (
    <div className="container">
      <table className="table table-hover table-responsive rfp-table">
        <thead>
          <tr className="table-active">
            <th scope="col" className="table-head">
              RFP NUMBER
            </th>
            <th scope="col">
              Date Submitted
            </th>
            <th scope="col">Status</th>
            <th scope="col">Submitted By</th>
            <th scope="col">Executives</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>12/2/2023</td>
            <td>done</td>
            <td>Rui Yang Tan</td>
            <td>Joanne</td>
          </tr>
          {contents.map((rfp) => {
            return <TableContent {...rfp} key={crypto.randomUUID()} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableContent = (rfp) => {
  console.log(rfp);
  const { rfpNum, date, status, submitter, executive } = rfp;
  return (
    <tr>
      <td>{rfpNum}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>{submitter}</td>
      <td>{executive}</td>
    </tr>
  );
};

const contents = [
  {
    rfpNum: "12345678",
    date: "12/12/2001",
    status: "completed",
    submitter: "John Doe",
    executive: "John Mary",
  },
];

export const addNewTableContent = (
  rfpNum,
  date,
  status,
  submitter,
  executive
) => {
  var rfp = {
    rfpNum: rfpNum,
    date: date,
    status: status,
    submitter: submitter,
    executive: executive,
  };
  contents.push(rfp);
};

addNewTableContent(
  "87654321",
  "1/1/2011",
  "incomplete",
  "John Doee",
  "John Mary"
);
