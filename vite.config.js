import mkcert from 'vite-plugin-mkcert';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      sveltekit(),
      mode === 'development' && mkcert()  // Only apply mkcert in development
    ].filter(Boolean),  // Ensure no false or undefined plugins
    server: {
      https: mode === 'development',  // Use HTTPS only in development
      proxy: mode === 'development' ? {} : undefined // Only set proxy in development
    }
  };
});
