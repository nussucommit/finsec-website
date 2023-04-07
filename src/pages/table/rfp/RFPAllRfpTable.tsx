//https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=112-439&t=ccxtLLnHPMViuz6A-0

import { Table } from "@mantine/core";
import '../style.scss';

type RFPTableProps = {
  rfp_list: RFP[];
};

const TableHeaders = {
  rfp_number: "RFP NUMBERS",
  date_submitted: "Date Submitted",
  status: "Status",
  submitted_by: "Submitted By",
  executives: "Executives",
};

const RFPAllRfpTable = ({ rfp_list }: RFPTableProps) => {
  const rfpRows = rfp_list.map((rfp) => (
    <tr key={rfp.rfp_number}>
      <td>{rfp.rfp_number}</td>
      <td>{rfp.date_submitted.toLocaleDateString()}</td>
      <td>{rfp.status}</td>
      <td><a href={"https://www.google.com"}>{rfp.submitter}</a></td> 
      <td><a href={"https://www.google.com"}>{rfp.executive}</a></td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="md"
      horizontalSpacing="md"
      highlightOnHover
      className="table"
    >
      <thead>
        <tr className="table-header">
          <th>{TableHeaders.rfp_number}</th>
          <th>{TableHeaders.date_submitted}</th>
          <th>{TableHeaders.status}</th>
          <th>{TableHeaders.submitted_by}</th>
          <th>{TableHeaders.executives}</th> 
        </tr>
      </thead>
      <tbody className="table-body">{rfpRows}</tbody>
    </Table>
  );
};

export default RFPAllRfpTable;