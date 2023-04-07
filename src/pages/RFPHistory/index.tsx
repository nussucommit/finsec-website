import { useEffect, useState } from "react";
import dummyRFPs from "../../dummy/dummyRFPs.json";
import RFPHistoryTable from "pages/table/rfp/RFPHistoryTable";

const RFPHistoryPage = () => {
  // set up states here
  const [rfps, setRFPs] = useState<RFP[]>([]);

  // set up effects here
  useEffect(() => {
    const data = dummyRFPs.map((rfp) => ({
      ...rfp,
      date_submitted: new Date(rfp.date_submitted),
      status: rfp.status as RFPStatus,
    }));
    setRFPs(data);
  }, []);

  // return component
  return (
    <div className="page" >
      { /* can delete the title of the page */ }
      <h1>RFP History Page</h1>
      <RFPHistoryTable rfp_list={rfps}/>
    </div>
  );
};

export default RFPHistoryPage;
