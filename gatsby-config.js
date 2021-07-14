/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
    title: `Muberza - insight into politicians' viewrship`,
    description: `track facebook lives of abir moussi, saif eddine makhlouf, and other tunisian politicians`,
    author:`Adam Trabelsi`,
    keywords:`abir moussi, saif makhlouf, tunisia, politicians, stats, data-vis`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./data`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: `./static/api`,
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `data/svg/favicon.svg`,
        background_color: `#40100A`,
        theme_color: `#EB4B36`,
        display: `standalone`,
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'ar-TN',
        useLangKeyLayout: false
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,

  ]
}
