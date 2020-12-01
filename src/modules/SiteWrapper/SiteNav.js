import React, { Fragment } from "react";
import { NavLink, Box, Heading } from "theme-ui";
import { Link } from "gatsby";

const HeadingLink = ({ to, children }) => (
  <NavLink
    as={Link}
    to={to}
    sx={{
      p: [1, 1, 3],
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

const HeadingGroup = ({ sx, ...attrs }) => (
  <Box as="nav" sx={sx} {...attrs}>
    <HeadingLink to="/personal">Personal</HeadingLink>
    <HeadingLink to="/professional">Professional</HeadingLink>
    {/* TODO */}
    <HeadingLink to="/about">About</HeadingLink>
  </Box>
);

function Nav({ ...attrs }) {
  return (
    <Fragment>
      <HeadingGroup sx={{ display: ["none", "flex", "flex"] }} {...attrs} />
      <HeadingGroup
        sx={{
          display: ["flex", "none", "none"],
          flexDirection: "column",
        }}
        {...attrs}
      />
    </Fragment>
  );
}

export default Nav;
