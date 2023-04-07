import { useEffect, useState } from "react";
import dummyRFPs from "../../dummy/dummyRFPs.json";
import RFPAllRfpTable from "pages/table/rfp/RFPAllRfpTable";

const RFPAllRfp = () => {
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
      <h1>RFP (All Rfps)</h1>
      <RFPAllRfpTable rfp_list={rfps}/>
    </div>
  );
};

export default RFPAllRfp;
