import mkcert from 'vite-plugin-mkcert';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isHttps = mode === 'development' || mode === 'preview';  // Enable HTTPS in both dev and preview

  return {
    plugins: [
      sveltekit(),
      mode === 'development' && mkcert()  // Only apply mkcert in development mode
    ].filter(Boolean),  // Ensure no false or undefined plugins are included
    server: {
      https: isHttps,  // Use HTTPS in both development and preview
      proxy: mode === 'development' ? {} : undefined,  // Proxy only in development mode
    }
  };
});
