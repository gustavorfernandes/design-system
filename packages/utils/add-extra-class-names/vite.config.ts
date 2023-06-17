import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';


const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    coverage: {
      provider: 'c8',
      reportsDirectory: './unit/coverage',
      reporter: ['text', 'json', 'html'],
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
    sourcemap: true,
    // ssr: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'addExtraClassNames',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
    },
  },
  plugins: [
    dts({
      libFolderPath: './node_modules/typescript/lib',
      outputDir: 'dist',
      staticImport: true,
      skipDiagnostics: true,
      insertTypesEntry: true,
      rollupTypes: true,
    })
  ],
  test: vitestConfig.test
})
