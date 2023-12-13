import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        assets: path.resolve('src/assets/'),
        components: path.resolve('src/components/'),
        contexts: path.resolve('src/contexts/'),
        layouts: path.resolve('src/layouts/'),
        routes: path.resolve('src/routes/'),
        services: path.resolve('src/services/'),
        utils: path.resolve('src/utils/'),
        variables: path.resolve('src/variables/'),
        views: path.resolve('src/views/'),
        shared: path.resolve('src/shared/'),
      },
    },
    plugins: [react()],
  };
});
