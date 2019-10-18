export const CHANGE = 'document/title/CHANGE';
export interface Change {
  type: typeof CHANGE,
  payload: string;
};

export type TitleActions =
  | Change;


type TitleState = string;
export default TitleState;
