import React from "react";
import { IconButton, Text, Heading, Flex, Image } from "theme-ui";
import SiteWrapper from "../modules/SiteWrapper";

const About = ({ data }) => {
  if (!data) {
    return (
      <SiteWrapper>
        <Text>Coming soon...</Text>      
      </SiteWrapper>
    );
  }
  const aboutData = data?.prismicAbout?.data;

  return (
    <SiteWrapper>
      <Flex
        sx={{
          width: ["100%", "75vw"],
          flexFlow: ["column", "row"],
          alignItems: ["baseline", "start"],
        }}
      >
        {console.log(aboutData)}
        <Image
          src={aboutData.profile_image?.url}
          sx={{
            height: "250px",
            width: "250px",
            objectFit: "contain",
            flex: 1,
          }}
        />
        <Flex sx={{ flex: 1, flexDirection: "column", mt: [4, 0, 0] }}>
          <Heading mb={3}>{aboutData?.title?.[0]?.text}</Heading>          
          <Text>{aboutData?.bio?.[0]?.text}</Text>
          {aboutData?.social_media.length > 0 && (
            <Flex mt={4}>
              {aboutData?.social_media.map(
                ({ platform_name, platform_url }) => {
                  const name = platform_name[0].text.toLowerCase();
                  return (
                    <IconButton
                      as="a"
                      href={platform_url.url}
                      key={name}
                      sx={{ cursor: "pointer", mr: 1, height: "50px" }}
                    >
                      <Image
                        height="25px"
                        width="25px"
                        src={`https://simpleicons.org/icons/${name}.svg`}
                        alt={name}
                      />
                    </IconButton>
                  );
                }
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </SiteWrapper>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutPage {
    prismicAbout {
      data {
        bio {
          type
          text
        }
        profile_image {
          url
        }
        social_media {
          platform_name {
            type
            text
          }
          platform_url {
            url
          }
        }
        title {
          text
          type
        }
      }
    }
  }
`;
