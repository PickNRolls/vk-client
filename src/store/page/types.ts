export type PageName =
  | 'messages';

export const CHANGE_PAGE = 'page/CHANGE_PAGE';
interface changePageAction {
  type: typeof CHANGE_PAGE;
  payload: PageName;
};

export const CHANGE_META = 'page/CHANGE_META';
interface changeMetaAction {
  type: typeof CHANGE_META,
  payload: AllPageMeta
};

export type PageActions =
  | changePageAction
  | changeMetaAction;

export interface MessagesPageMeta {
  loadingDialogs?: boolean;
};

export type AllPageMeta =
  | MessagesPageMeta;

export default interface PageState {
  name: PageName;
  meta: AllPageMeta;
};
