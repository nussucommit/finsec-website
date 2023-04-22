import { Route, Routes } from "react-router";

export function RfpRoutes()
{
    return (
      <Routes>
        <Route path="/allrfp" element={<h1>All RFP</h1>} />
        <Route path="/incoming" element={<h1>Incoming RFP</h1>} />
        <Route path="/rejected" element={<h1>Rejected RFP</h1>} />
        <Route path="/approved" element={<h1>Approved RFP</h1>} />
      </Routes>
    );
}