import { Route, Routes } from "react-router-dom";
import { RfpRoutes } from "./RfpRoutes";
import NavBarHeader from "./NavBarHeader";
import "./style.css";

export default function NavBar() {
  return (
    <>
      <NavBarHeader />
      <Routes>
        <Route path="/rfp/*" element={<RfpRoutes />} />
      </Routes>
    </>
  );
}
