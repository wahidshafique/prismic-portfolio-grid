import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";

const Project = ({ data }) => {
  if (!data) return null;
  const project = data.prismicProject.data;
  return (
    <div>
      <div>
        <a href="/">go back</a>
        <h3>{project.title.text}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.text.html }} />
    </div>
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
      }
    }
  }
`;
