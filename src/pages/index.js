import React from "react";
import { withPreview } from "gatsby-source-prismic";

function Home({ data }) {
  return <div>Hello world!</div>;
}
export default withPreview(Home);
