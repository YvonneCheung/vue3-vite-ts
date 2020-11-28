import type { RouteRecordRaw } from 'vue-router';

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: any;
  components?: any;
  children?: AppRouteRecordRaw[];
  props?: any;
  fullPath?: string;
}

export interface RouteModule {
  layout: AppRouteRecordRaw;
  routes: AppRouteRecordRaw[];
  children?: AppRouteRecordRaw[];
  component?: any;
}

export type AppRouteModule = RouteModule | AppRouteRecordRaw;
