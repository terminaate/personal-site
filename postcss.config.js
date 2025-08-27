export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 1rem = 16px
      propList: ['*'], // properties to convert
      minPixelValue: 2, // don't convert anything below this value
    },
    cssnano: {},
  },
};
