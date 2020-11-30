import React from "react";
import { Heading, Flex, Close } from "theme-ui";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Boop from "../../components/Boop";
import SiteNav from "./SiteNav";
import { Link } from "gatsby";

export default function SiteHeader({ showClose, closePageLink = "/" }) {
  console.log(111, closePageLink);
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
      <Flex sx={{ alignItems: "center" }}>
        <Heading
          as={Link}
          to="/"
          sx={{
            fontSize: 6,
            textDecoration: "none",
            color: "text",
            "&:visited": { color: "text" },
          }}
        >
          {data.title.text}
        </Heading>
        <SiteNav ml={3} />
        {showClose && (
          <Flex sx={{ ml: "auto" }}>
            <Boop rotation={10} timing={200}>
              <Close
                onClick={() => {
                  navigate(closePageLink);
                }}
                sx={{
                  cursor: "pointer",
                  placeSelf: "center",
                  svg: {
                    transform: "scale(2)",
                  },
                }}
              />
            </Boop>
          </Flex>
        )}
      </Flex>
      <Heading sx={{ color: "secondary", fontSize: 3 }} as="h3">
        {data.subtitle.text}
      </Heading>
    </Flex>
  );
}
