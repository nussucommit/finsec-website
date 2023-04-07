import { useEffect, useState } from "react";
import dummyResources from "../../dummy/dummyResources.json";
import ResourceManagementTable from "pages/table/resource/ResourceManagementTable";

const ResourceManagement = () => {
  // set up states here
  const [resources, setResources] = useState<Resource[]>([]);

  // set up effects here
  useEffect(() => {
    setResources(dummyResources);
  }, []);

  // return component
  return (
    <div className="page">
      { /* can delete the title of the page */ }
      <h1>Resource Management Page</h1>
      <ResourceManagementTable resource_list={resources}/>
    </div>
  );
};

export default ResourceManagement;
