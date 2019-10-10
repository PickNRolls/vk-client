import {
  PageActions,
  CHANGE_PAGE,
  CHANGE_META,
  PageName,
  AllPageMeta,
} from './types';

export const changePage = (name: PageName): PageActions => ({
  type: CHANGE_PAGE,
  payload: name
});

export const changeMeta = (meta: AllPageMeta): PageActions => ({
  type: CHANGE_META,
  payload: meta
});
