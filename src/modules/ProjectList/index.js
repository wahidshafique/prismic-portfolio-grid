import React from "react";
import { Box, Text } from "theme-ui";
import FadeIn from "../../components/FadeIn";
import { navigate } from "gatsby";
import Gallery from "react-photo-gallery";

const ImageRenderer = ({ key, photo }) => (
  <Box
    onClick={photo.onClick}
    sx={{
      width: photo.width,
      height: photo.height,
      cursor: "pointer",
      position: "relative",
      m: "2px",
    }}
    key={key}
  >
    <Box
      sx={{
        backgroundColor: "rgba(255, 196, 12, 0.5)",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        opacity: 0,
        transition: "0.3s all ease",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <Text
        sx={{
          fontSize: 3,
          fontWeight: "bold",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          width: "100%",
          transform: "translateY(-50%)",
        }}
      >
        {photo.title}
      </Text>
    </Box>
    <Box as="img" height="100%" width="100%" src={photo.src} loading="lazy" />
  </Box>
);

const ProjectList = ({ listOfProjects }) => {
  const mappedPhotos = listOfProjects.map(({ node }) => {
    return {
      key: node.id,
      src: node.data.cover.fluid.src,
      width: node.data.cover.dimensions.width,
      height: node.data.cover.dimensions.height,
      title: node.data.title.text,
      onClick: () => {
        const tag = node.tags[0] || process.env.GATSBY_PROJECT_BASE_URL;
        navigate(`/${tag}/${node.uid}`, { state: { fromTag: tag } });
      },
    };
  });
  return (
    <FadeIn>
      <Gallery renderImage={ImageRenderer} photos={mappedPhotos} />
    </FadeIn>
  );
};

export default ProjectList;
