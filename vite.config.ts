import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        components: path.resolve('src/components/'),
        shared: path.resolve('src/shared/'),
        services: path.resolve('src/services/'),
        utils: path.resolve('src/utils/'),
        interfaces: path.resolve('src/interfaces/'),
      },
    },
    plugins: [react()],
  };
});
