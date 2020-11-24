import React from "react";
import { NavLink, Flex } from "theme-ui";

function Nav() {
  return (
    <Flex as="nav">
      <NavLink href="#!" p={2}>
        Personal Work
      </NavLink>
      <NavLink href="#!" p={2}>
        Professional Work
      </NavLink>
      <NavLink href="#!" p={2}>
        Contact
      </NavLink>
    </Flex>
  );
}

export default Nav;
