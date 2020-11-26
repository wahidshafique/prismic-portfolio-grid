import React from "react";
import { Heading, Flex, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

export default function SiteHeader() {
  const {
    prismicHome: { data },
  } = useStaticQuery(graphql`
    query Titles {
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
  `);
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading sx={{ color: "secondary" }}>{data.title.text}</Heading>
      <Heading as="h3">{data.subtitle.text}</Heading>
    </Flex>
  );
}
