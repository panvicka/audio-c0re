module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "GZZUaC-qp0wtJoxious8hctxheXHP8PBzB1ofeyCrPg",
        spaceId: "9u8532njgcs5",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
