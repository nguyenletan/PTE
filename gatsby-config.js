module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-theme-docz',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-docz'],
      },
    },
  ],
};
