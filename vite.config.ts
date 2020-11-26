import type { UserConfig } from 'vite';

import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const viteConfig: UserConfig = {
  port: 3555,
  hostname: 'localhost',
  open: false,
  outDir: 'dist',

  alias: {
    '/@/': pathResolve('./src'),
  },
};

export default viteConfig;
