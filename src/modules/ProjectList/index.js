import React from "react";
import { Flex } from "theme-ui";
import FadeIn from "../../components/FadeIn";
import { navigate } from "gatsby";
import { globalHistory } from "@reach/router";

const Wrapper = ({ children }) => (
  <Flex
    as="ul"
    sx={{
      p: 0,
      m: 0,
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
    <Flex
      onClick={onClick}
      as="li"
      sx={{
        cursor: "pointer",
        m: 1,
      }}
    >
      <Flex
        sx={{
          maxHeight: "100%",
          width: "100%",
          objectFit: "cover",
          verticalAlign: "bottom",
        }}
        as="img"
        src={img}
        loading="lazy"
      />
    </Flex>
  </FadeIn>
);

const ProjectList = ({ listOfProjects }) => {
  return (
    <Wrapper>
      {listOfProjects.map(({ node }) => (
        <Item
          key={node.id}
          img={node.data.cover.fluid.src}
          onClick={() => {
            const tag = node.tags[0] || process.env.GATSBY_PROJECT_BASE_URL;
            navigate(`/${tag}/${node.uid}`, { state: { fromTag: tag } });
          }}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectList;
