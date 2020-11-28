import React from "react";
import { Flex, Box } from "theme-ui";
import { useStaticQuery, graphql, navigate } from "gatsby";
import FadeIn from "../components/FadeIn";

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

const Item = ({ img, onClick }) => (
  <FadeIn>
    <Box
      onClick={onClick}
      as="li"
      sx={{
        cursor: "pointer",
        flexGrow: 1,
      }}
    >
      <Box
        as="img"
        sx={{
          maxHeight: "100%",
          width: "100%",
          objectFit: "cover",
          verticalAlign: "bottom",
        }}
        src={img}
        loading="lazy"
      />
    </Box>
  </FadeIn>
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
            uid
            data {
              text {
                html
                text
                raw
              }
              cover {
                fluid(maxWidth: 500, maxHeight: 500) {
                  ...GatsbyPrismicImageFluid
                }
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
        <Item
          key={node.id}
          img={node.data.cover.fluid.src}
          onClick={() => {
            navigate(`${process.env.GATSBY_PROJECT_BASE_URL}/${node.uid}`);
          }}
        />
      ))}
    </Wrapper>
  );
}
