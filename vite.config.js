import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgReact from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      svgReact({
          exportAsDefault: true,
          include: "./src/icons/*.svg",
      })
  ],
})
