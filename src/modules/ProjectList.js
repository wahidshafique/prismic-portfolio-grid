import React from "react";
import { Heading, Flex, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = ({ children }) => (
  <Flex
    as="ul"
    sx={{
      p: 0,
      m: 10,
      listStyleType: "none",
      flexWrap: "wrap",
      "&:after": {
        content: "",
        display: "block",
        flexGrow: 10,
      },
    }}
  >
    {children}
  </Flex>
);

const Item = ({ img }) => (
  <Box
    as="li"
    sx={{
      height: "40vh",
      flexGrow: 1,
    }}
  >
    <Box
      as="img"
      sx={{
        maxHeight: "100%",
        minWidth: "100%",
        objectFit: "cover",
        verticalAlign: "bottom",
      }}
      src={img}
      loading="lazy"
    />
  </Box>
);

export default function ProjectList() {
  const {
    allPrismicProject: { edges },
  } = useStaticQuery(graphql`
    query Projects {
      allPrismicProject {
        edges {
          node {
            id
            data {
              text {
                html
                text
                raw
              }
              cover {
                alt
                copyright
                url
                thumbnails
              }
            }
            tags
          }
        }
      }
    }
  `);

  console.log(edges);
  return (
    <Wrapper>
      {edges.map(({ node }) => (
        <Item img={node.data.cover.url} />
      ))}
    </Wrapper>
  );
}
