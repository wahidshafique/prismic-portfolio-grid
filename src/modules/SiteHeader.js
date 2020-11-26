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
    <Flex sx={{ flexDirection: "column", mb: 6 }}>
      <Heading sx={{ fontSize: 6 }}>{data.title.text}</Heading>
      <Heading sx={{ color: "secondary", fontSize: 4 }} as="h3">
        {data.subtitle.text}
      </Heading>
    </Flex>
  );
}
