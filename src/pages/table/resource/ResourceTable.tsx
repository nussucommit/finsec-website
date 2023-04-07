//https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=113-146&t=ccxtLLnHPMViuz6A-0

import { Table } from "@mantine/core";
import '../style.scss';

type ResourceProps = {
  resource_list: Resource[];
};

const TableHeaders = {
    name: "Name",
    link: "Link"
};

const ResourceTable = ({ resource_list }: ResourceProps) => {
  const resourceRows = resource_list.map((resource) => (
    <tr key={crypto.randomUUID()}>
        <td>{resource.name}</td>
        <td><a href={resource.link}>{resource.link}</a></td>
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
          <th>{TableHeaders.name}</th>
          <th>{TableHeaders.link}</th>
        </tr>
      </thead>
      <tbody className="table-body">{resourceRows}</tbody>
    </Table>
  );
};

export default ResourceTable;
