module.exports = {
  siteMetadata: {
    title: `Project12`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cutive`, `open sans`]
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1jbQjUrLKPA5ZyUA5CR6yxJy3B7ZE5ydQ_PPknYfrHc0',
          worksheetTitle: 'Form Responses 1',
          credentials: require('./client_secret.json')
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ]
};
