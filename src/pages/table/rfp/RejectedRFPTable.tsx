//https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=16-62&t=ccxtLLnHPMViuz6A-0

import { Table, Button, Group } from "@mantine/core";
import '../style.scss';

type RFPTableProps = {
  rfp_list: RFP[];
};

const TableHeaders = {
  rfp_number: "RFP NUMBERS",
  date_submitted: "Date Submitted",
  details: "Details",
};

const ButtonNames = {
    view_details: "View Details"
}

// TODO
const onViewDetailsRFP = (rfp: RFP) => {};

const RejectedRFPTable = ({ rfp_list }: RFPTableProps) => {
  const rfpRows = rfp_list.map((rfp) => (
    <tr key={rfp.rfp_number}>
      <td>{rfp.rfp_number}</td>
      <td>{rfp.date_submitted.toLocaleDateString()}</td>
      <td>
        <Group className="btn-group">
            <Button variant="light" color="blue" onClick={() => onViewDetailsRFP(rfp)} >{ButtonNames.view_details}</Button>
        </Group>
      </td>
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
          <th>{TableHeaders.details}</th>
        </tr>
      </thead>
      <tbody className="table-body">{rfpRows}</tbody>
    </Table>
  );
};

export default RejectedRFPTable;
