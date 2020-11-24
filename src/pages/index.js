import React from "react";
import { withPreview } from "gatsby-source-prismic";
import { graphql } from "gatsby";
import { Heading, Flex, Box } from "theme-ui";
import Nav from "../components/Nav";

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

function Home({ data }) {
  const { title, subtitle } = data.prismicHome.data;
  console.log(data);
  return (
    <div>
      <Flex sx={{ flexDirection: "column" }}>
        <Heading sx={{ color: "secondary" }}>{title.text}</Heading>
        <Heading as="h3">{subtitle.text}</Heading>
      </Flex>
      {/* <Nav /> */}
      <Wrapper>
        <Item img="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg" />
        <Item img="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg" />
        <Item img="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05565_dx5rp6.jpg" />
        <Item img="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05613_o9af2z.jpg" />
        <Item img="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05480_zkw8sm.jpg" />
      </Wrapper>
    </div>
  );
}

export const pageQuery = graphql`
  query Home {
    prismicHome {
      data {
        title {
          text
        }
        subtitle {
          text
          html
        }
      }
    }
  }
`;

export default withPreview(Home);
