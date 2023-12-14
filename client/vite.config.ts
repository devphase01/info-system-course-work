import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/widgets/ui') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/shared/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/shared/utils') },
      { find: '@assets', replacement: path.resolve(__dirname, 'public/assets') },
      { find: '@pages', replacement:  path.resolve(__dirname, 'src/pages')},
      { find: '@widgets', replacement:  path.resolve(__dirname, 'src/widgets')},
    ]
  }
});
