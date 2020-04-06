module.exports = {
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
