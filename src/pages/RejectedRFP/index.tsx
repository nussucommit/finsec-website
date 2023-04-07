import { useEffect, useState } from "react";
import dummyRFPs from "../../dummy/dummyRFPs.json";
import RejectedRFPTable from "pages/table/rfp/RejectedRFPTable";

const RejectedRFP = () => {
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
      <h1>Rejected RFP</h1>
      <RejectedRFPTable rfp_list={rfps}/>
    </div>
  );
};

export default RejectedRFP;
