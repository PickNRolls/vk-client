declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void
  ) => void;
};

/*
  Instructions for TypeScript to use 'any'
  for all file-module imports
*/
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg';

/*
  Instructions for TypeScript to use 'any'
  for all css imports
*/
declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}
