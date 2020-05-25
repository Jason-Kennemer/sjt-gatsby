/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const urljoin = require('url-join')
const { resolve, path } = require(`path`)
const config = require('./data/metadata')
const { version, license } = require(`./package.json`)
const {
  branch,
  siteUrl,
  repository,
  // isDebug,
} = require(`./src/utils/environment-helpers.js`)

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.siteAuthor,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    version,
    branch,
    license,
    repository,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "MDXImages",
        path: "src/images/",
      },
      __key: "src/images",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "MDXPages",
        path: "src/pages/",
      },
      __key: "src/pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/icons/the-moon-logo-color-01.png`, // This path is relative to the root of the site.
        theme_color_in_head: true, // This will avoid adding theme-color meta tag.
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
};
