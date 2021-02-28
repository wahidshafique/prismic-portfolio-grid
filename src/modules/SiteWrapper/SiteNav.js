import React, { Fragment } from "react";
import { NavLink, Box, Heading } from "theme-ui";
import { globalHistory } from "@reach/router";
import { Link, useStaticQuery, graphql } from "gatsby";

const HeadingLink = ({ to, children }) => (
  <NavLink
    as={Link}
    to={to}
    sx={{
      p: [1, 1, 3],
    }}
    activeStyle={{ color: "red" }}
  >
    <Heading
      as="h3"
      sx={{
        color: globalHistory.location.pathname.includes(to)
          ? "text"
          : "secondary",
        "&:hover": { color: "text" },
      }}
    >
      {children}
    </Heading>
  </NavLink>
);

const HeadingGroup = ({ sx, ...attrs }) => {
  const {
    allPrismicProject: { distinct },
  } = useStaticQuery(graphql`
    query NavTags {
      allPrismicProject {
        distinct(field: tags)
      }
    }
  `);
  return (
    <Box as="nav" sx={sx} {...attrs}>
      {distinct?.map((tag) => (
        <HeadingLink key={tag} to={`/${tag}`}>
          {tag}
        </HeadingLink>
      ))}
      <HeadingLink to="/about">about</HeadingLink>
    </Box>
  );
};

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
