import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcssNesting from '@tailwindcss/nesting'

export default {
  plugins: [
    tailwindcssNesting(),
    tailwindcss(),
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', 'ie >= 11'],
    }),
  ],
}
