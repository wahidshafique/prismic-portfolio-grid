import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import SiteWrapper from "../modules/SiteWrapper";
import FadeIn from "../components/FadeIn";
import { Flex, Heading } from "theme-ui";

const Project = ({ location, data }) => {
  if (!data) return null;
  const project = data.prismicProject.data;
  return (
    <SiteWrapper
      showClose
      closePageLink={location?.state?.fromTag && `/${location.state.fromTag}`}
    >
      <Flex sx={{ placeContent: "center" }}>
        <FadeIn>
          <Flex
            as="img"
            sx={{
              maxWidth: "100%",
              objectFit: "contain",
              verticalAlign: "bottom",
            }}
            src={project.cover.fluid.src}
            loading="lazy"
          />
        </FadeIn>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          fontFamily: "quicksand",
        }}
      >
        <Heading mb={1}>{project.title.text}</Heading>
        <div dangerouslySetInnerHTML={{ __html: project.description.html }} />
      </Flex>
    </SiteWrapper>
  );
};

export default withPreview(Project);

export const pageQuery = graphql`
  query ProjBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        description {
          html
        }
        title {
          text
        }
        cover {
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
      }
    }
  }
`;
