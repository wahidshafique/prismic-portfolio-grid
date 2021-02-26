import React from "react";
import { withPreview } from "gatsby-source-prismic";
import SiteWrapper from "../modules/SiteWrapper";
import ProjectList from "../modules/ProjectList";
import { graphql } from "gatsby";

function ProjectGroup({ data }) {
  return (
    <SiteWrapper>
      <ProjectList listOfProjects={data.allPrismicProject.edges} />
    </SiteWrapper>
  );
}

export default withPreview(ProjectGroup);

export const pageQuery = graphql`
  query ProjectGroup($tag: String!) {
    allPrismicProject(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          id
          uid
          data {
            cover {
              dimensions {
                height
                width
              }
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
`;
