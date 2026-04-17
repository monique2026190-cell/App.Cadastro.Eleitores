
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      react(),
      isProd && compression(),
      isProd && visualizer({
        filename: 'stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': '/frontend',
      },
      dedupe: ['react', 'react-dom'],
    },

    server: {
      port: 3000,
      strictPort: true,
      host: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3333',
          changeOrigin: true,
        },
      },
    },

    build: {
      sourcemap: isProd ? 'hidden' : true,
      chunkSizeWarningLimit: 800,

      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',

          // Lógica de chunking final para evitar dependências circulares
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react-router') || id.includes('react-dom') || id.includes('react')) {
                return 'framework'; // Agrupa o core do React e roteamento
              }
              if (id.includes('@mui')) {
                return 'ui'; // Agrupa a biblioteca de UI
              }
              return 'vendor'; // Todo o resto das libs
            }
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
