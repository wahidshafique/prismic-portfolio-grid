import React from "react";
import { withPreview } from "gatsby-source-prismic";
import SiteWrapper from "../modules/SiteWrapper";
import ProjectList from "../modules/ProjectList";
import { graphql } from "gatsby";

function Home({ data }) {
  return (
    <SiteWrapper>
      <ProjectList listOfProjects={data.allPrismicProject.edges} />
    </SiteWrapper>
  );
}

export default withPreview(Home);

export const pageQuery = graphql`
  query PersonalProjects {
    allPrismicProject(filter: { tags: { eq: "personal" } }) {
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
`;
