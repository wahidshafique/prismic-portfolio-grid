import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import SiteWrapper from "../modules/SiteWrapper";
import FadeIn from "../components/FadeIn";
import { Flex } from "theme-ui";

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
      {/* <div dangerouslySetInnerHTML={{ __html: project.text.html }} /> */}
    </SiteWrapper>
  );
};

export default withPreview(Project);

export const pageQuery = graphql`
  query ProjBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        text {
          text
          html
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
