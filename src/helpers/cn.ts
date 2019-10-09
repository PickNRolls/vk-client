interface IConditions {
  [modifier: string]: boolean | string;
};

const cn = (baseClass: string, propsClasses?: string, conditions?: IConditions) => {
  let finalClass = baseClass;
  if (conditions) {
    finalClass += Object.keys(conditions).reduce((modifiers, modifier) => {
      const value = conditions[modifier];
      if (typeof value === 'boolean' && value) {
        return `${modifiers} ${baseClass}_${modifier}`;
      }

      if (typeof value === 'string') {
        return `${modifiers} ${baseClass}_${modifier}_${value}`;
      }

      return modifiers;
    }, '');
  }

  if (propsClasses) {
    finalClass += ' ' + propsClasses;
  }

  return finalClass;
};

export default cn;
