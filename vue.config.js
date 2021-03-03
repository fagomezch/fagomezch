module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fagomezch.github.io/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/settings/colors.scss";
        `,
      },
    },
  },
};
