import { Tabs } from "@mantine/core";
import { NavLink } from "react-router-dom";

const navLinks = ["All RFP", "Incoming", "Rejected", "Approved"];

export default function NavBarHeader()
{
  return (
    <Tabs variant="outline" className="nav-tabs">
      <Tabs.List>
        {navLinks.map((link) => {
          var linkValue = link.replace(/\s/g, "").toLowerCase();
          return (
            <Tabs.Tab value={linkValue} key={crypto.randomUUID()}>
              <NavLink to={"rfp/" + linkValue} className="nav-link">{link}</NavLink>
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
    </Tabs>
  );
};
