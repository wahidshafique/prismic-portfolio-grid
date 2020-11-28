import React from "react";
import { Heading, Flex, Close } from "theme-ui";
import { useStaticQuery, graphql, navigate } from "gatsby";

export default function SiteHeader({ showClose }) {
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
      <Flex sx={{ placeContent: "space-between" }}>
        <Heading sx={{ fontSize: 6 }}>{data.title.text}</Heading>
        {showClose && (
          <Close
            onClick={() => {
              navigate("/");
            }}
            sx={{
              cursor: "pointer",
              placeSelf: "center",
              svg: {
                transform: "scale(1.5)",
              },
            }}
          />
        )}
      </Flex>
      <Heading sx={{ color: "secondary", fontSize: 4 }} as="h3">
        {data.subtitle.text}
      </Heading>
    </Flex>
  );
}
