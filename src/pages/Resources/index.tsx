import { useEffect, useState } from "react";
import dummyResources from "../../dummy/dummyResources.json";
import ResourceTable from "pages/table/resource/ResourceTable";

const ResourcePage = () => {
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
      <h1>Resource Page</h1>
      <ResourceTable resource_list={resources}/>
    </div>
  );
};

export default ResourcePage;
