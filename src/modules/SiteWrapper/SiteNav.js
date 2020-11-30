import React from "react";
import { NavLink, Flex, Heading } from "theme-ui";
import { Link } from "gatsby";

const HeadingLink = ({ to, children }) => (
  <NavLink
    as={Link}
    to={to}
    sx={{
      p: 2,
    }}
  >
    <Heading
      as="h3"
      sx={{
        color: window.location.pathname.includes(to) ? "text" : "secondary",
        "&:hover": { color: "text" },
      }}
    >
      {children}
    </Heading>
  </NavLink>
);

function Nav({ ...attrs }) {
  return (
    <Flex as="nav" {...attrs}>
      <HeadingLink to="/personal">Personal</HeadingLink>
      <HeadingLink to="/professional">Professional</HeadingLink>
      <HeadingLink to="/contact">Contact</HeadingLink>
    </Flex>
  );
}

export default Nav;
