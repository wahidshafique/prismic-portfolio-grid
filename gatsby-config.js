require("dotenv").config({
  path: `.env`,
});

const prismicLinkResolver = require("./src/utils/linkResolver");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand\:400,600`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "auto",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          project: require("./.prismic/project.json"),
          home: require("./.prismic/home.json"),
        },
        prismicToolbar: true,
        linkResolver: () => prismicLinkResolver,
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true;
        },
      },
    },
  ],
};
