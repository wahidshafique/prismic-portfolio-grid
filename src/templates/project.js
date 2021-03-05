import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import SiteWrapper from "../modules/SiteWrapper";
import FadeIn from "../components/FadeIn";
import { Flex, Heading, Box } from "theme-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

const FlexImage = ({ url, ...attrs }) => (
  <Flex
    as="img"
    sx={{
      margin: "0 auto",
      maxWidth: "100%",
      maxHeight: "500px",
      objectFit: "contain",
      verticalAlign: "bottom",
    }}
    src={url}
    onClick={() => {
      window.open(url, "_blank");
    }}
    loading="lazy"
    {...attrs}
  />
);

const Project = ({ location, data }) => {
  if (!data) return null;
  const project = data.prismicProject.data;
  const extraProjectImages = project.other_images.filter(
    (e) => !!e.secondary_image.url
  );

  return (
    <SiteWrapper
      showClose
      closePageLink={location?.state?.fromTag && `/${location.state.fromTag}`}
    >
      <FadeIn>
        <Box
          sx={{
            ".swiper-button-prev, .swiper-button-next": {
              top: 0,
              height: "100%",
              color: "#ffc40c",
            },
            ".swiper-pagination-bullet-active": {
              backgroundColor: "#ffc40c !important",
            },
          }}
        >
          <Swiper
            navigation={extraProjectImages.length > 0}
            pagination={extraProjectImages.length > 0}
            slidesPerView={1}
          >
            <SwiperSlide>
              <FlexImage url={project.cover.fluid.src} />
            </SwiperSlide>
            {extraProjectImages.map(({ secondary_image }) => (
              <SwiperSlide key={secondary_image.url}>
                <FlexImage url={secondary_image.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Flex sx={{ placeContent: "center" }}></Flex>
        <Flex
          sx={{
            flexDirection: "column",
            width: ["100%", "50%"],
            margin: "0 auto",
            fontFamily: "quicksand",
          }}
        >
          <Heading mt={3} mb={1}>
            {project.title.text}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: project.description.html }} />
        </Flex>
      </FadeIn>
    </SiteWrapper>
  );
};

export default withPreview(Project);

export const pageQuery = graphql`
  query ProjBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        description {
          html
        }
        other_images {
          secondary_image {
            url
          }
        }
        title {
          text
        }
        cover {
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
      }
    }
  }
`;
