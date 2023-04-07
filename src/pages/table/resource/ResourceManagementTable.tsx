//https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=113-11&t=ccxtLLnHPMViuz6A-0

import { Table, Button, Group } from "@mantine/core";
import '../style.scss';

type ResourceProps = {
  resource_list: Resource[];
};

const TableHeaders = {
    name: "Name",
    link: "Link",
    action: "Action"
};

const ButtonNames = {
    edit: "Edit",
    delete: "Delete"
}

// TODO
const onEditResource = (resource: Resource) => {};

// TODO
const onDeleteResource = (resource: Resource) => {};

const ResourceManagementTable = ({ resource_list }: ResourceProps) => {
  const resourceRows = resource_list.map((resource) => (
    <tr key={crypto.randomUUID()}>
        <td>{resource.name}</td>
        <td><a href={resource.link}>{resource.link}</a></td>
        <td>
            <Group className="btn-group">
                <Button variant="light" color="green" onClick={() => onEditResource(resource)} >{ButtonNames.edit}</Button>
                <Button variant="light" color="red" onClick={() => onDeleteResource(resource)} >{ButtonNames.delete}</Button>
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
          <th>{TableHeaders.name}</th>
          <th>{TableHeaders.link}</th>
          <th>{TableHeaders.action}</th>
        </tr>
      </thead>
      <tbody className="table-body">{resourceRows}</tbody>
    </Table>
  );
};

export default ResourceManagementTable;
