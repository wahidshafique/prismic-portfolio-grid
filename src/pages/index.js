import React from "react";
import { withPreview } from "gatsby-source-prismic";
import { Box } from "theme-ui";
import SiteHeader from "../modules/SiteHeader";
import ProjectList from "../modules/ProjectList";

function Home() {
  return (
    <Box p={[2, 4, 4]}>
      <SiteHeader />
      <ProjectList />
    </Box>
  );
}

export default withPreview(Home);
