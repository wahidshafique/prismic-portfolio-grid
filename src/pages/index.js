import React from "react";
import { withPreview } from "gatsby-source-prismic";
import { graphql } from "gatsby";
import { Heading, Flex, Box } from "theme-ui";
import Nav from "../components/Nav";
import SiteHeader from "../modules/SiteHeader";
import ProjectList from "../modules/ProjectList";

function Home() {
  return (
    <div>
      <SiteHeader />
      <ProjectList />
    </div>
  );
}

export default withPreview(Home);
