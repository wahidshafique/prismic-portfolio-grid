import React from "react";
import { Box } from "theme-ui";
import FadeIn from "../../components/FadeIn";
import { navigate } from "gatsby";
import Gallery from "react-photo-gallery";
const ImageRenderer = ({ key, photo }) => (
  <Box
    width={photo.width}
    height={photo.height}
    onClick={photo.onClick}
    sx={{
      cursor: "pointer",
      m: "2px",
    }}
    as="img"
    key={key}
    src={photo.src}
    loading="lazy"
  />
);

const ProjectList = ({ listOfProjects }) => {
  const mappedPhotos = listOfProjects.map(({ node }) => {
    return {
      key: node.id,
      src: node.data.cover.fluid.src,
      width: node.data.cover.dimensions.width,
      height: node.data.cover.dimensions.height,
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
