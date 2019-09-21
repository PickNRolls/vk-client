interface IKeyset {
  [key: string]: {
    en?: string | {
      0: string;
      1: string;
      2: string;
      5: string;
    };
    ru?: string | {
      0: string;
      1: string;
      2: string;
      5: string;
    };
  }
};

interface IOptions {
  count: number;
};

type TI18NLang = 'ru' | 'en';

let language: TI18NLang = 'ru'; // en
export default (keyset: IKeyset, key: string, options?: IOptions): string => {
  let text = keyset[key][language];
  if (text === undefined) return '';

  if (typeof text === 'string') {
    return text;
  }

  if (options === undefined) {
    throw new Error('if you have multiple declensions, you must pass options.');
  }

  let count: 0 | 1 | 2 | 5 = 0;
  const remainder = Math.round(options.count) % 10;
  if (remainder === 0) {
    count = 0;
  } else if (remainder === 1) {
    count = 1;
  } else if (remainder >= 2 && remainder < 5) {
    count = 2;
  }
  
  const remainderOf100 = Math.round(options.count) % 100;
  if (remainder >= 5 || (remainderOf100 >= 11 && remainderOf100 < 15)) {
    count = 5;
  }

  return text[count];
};
