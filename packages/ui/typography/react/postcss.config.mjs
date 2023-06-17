import autoprefixer from 'autoprefixer'

import postcssNested from 'postcss-nested'

export default {
  plugins: [
    postcssNested(),
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', 'ie >= 11'],
    }),
  ],
}
