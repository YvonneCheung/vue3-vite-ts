import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
import modules from 'globby!/@/router/routes/modules/**/*.@(ts)';

const glob = require('glob');

const modules = glob('./modules', function (er, files) {
  console.log(files);
  return files;
});

const routeModuleList: Array<Object> = [];

Object.keys(modules).forEach((key) => {
  routeModuleList.push(modules[key]);
});
