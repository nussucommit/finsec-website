import { Table, Button, Group } from "@mantine/core";

type RFPTableProps = {
  rfp_list: RFP[];
};

const TableHeaders = {
  rfp_number: "RFP NUMBERS",
  date_submitted: "Date Submitted",
  status: "Status",
  details: "Details",
};

const ButtonNames = {
    view_rfp: "View RFP",
    delete: "Delete"
}

// TODO
const onViewRFP = (rfp: RFP) => {};

// TODO
const onDelete = (rfp: RFP) => {};

const RFPTable = ({ rfp_list }: RFPTableProps) => {
  const rfpRows = rfp_list.map((rfp) => (
    <tr key={rfp.rfp_number}>
      <td>{rfp.rfp_number}</td>
      <td>{rfp.date_submitted.toLocaleDateString()}</td>
      <td>{rfp.status}</td>
      <td>
        <Group>
            <Button variant="light" color="blue" onClick={() => onViewRFP(rfp)} >{ButtonNames.view_rfp}</Button>
            <Button variant="light" color="red" onClick={() => onDelete(rfp)} >{ButtonNames.delete}</Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="md"
      horizontalSpacing="md"
      highlightOnHover
      className="rfp-table"
    >
      <thead>
        <tr>
          <th>{TableHeaders.rfp_number}</th>
          <th>{TableHeaders.date_submitted}</th>
          <th>{TableHeaders.status}</th>
          <th>{TableHeaders.details}</th>
        </tr>
      </thead>
      <tbody>{rfpRows}</tbody>
    </Table>
  );
};

export default RFPTable;
