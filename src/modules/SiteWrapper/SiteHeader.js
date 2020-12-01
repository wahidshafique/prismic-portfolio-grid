import React from "react";
import { Heading, Flex, Close } from "theme-ui";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Boop from "../../components/Boop";
import SiteNav from "./SiteNav";
import { Link } from "gatsby";

export default function SiteHeader({ showClose, closePageLink = "/" }) {
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
    <Flex sx={{ flexDirection: "column", mb: 5 }}>
      <Flex sx={{ alignItems: "center" }}>
        <Heading
          as={Link}
          to="/"
          sx={{
            flex: ["0.5", "none", "none"],
            fontWeight: "bold",
            fontSize: [5, 5, 6],
            textDecoration: "none",
            color: "text",
            "&:visited": { color: "text" },
          }}
        >
          {data.title.text}
        </Heading>
        <SiteNav ml={["auto", 3, 3]} />
        {showClose && (
          <Flex
            sx={{
              position: "fixed",
              right: [0, 3, 4],
              top: [2, "inherit", "inherit"],
            }}
          >
            <Boop rotation={10} timing={200}>
              <Close
                onClick={() => {
                  navigate(closePageLink);
                }}
                sx={{
                  cursor: "pointer",
                  placeSelf: "center",
                  minWidth: "50px",
                  svg: {
                    transform: ["scale(1.5)", "scale(2)", "scale(2)"],
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
