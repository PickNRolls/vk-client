interface IConditions {
  [modifier: string]: boolean | string;
};

export default (baseClass: string, conditions: IConditions, propsClass: string) => {
  return baseClass + Object.keys(conditions).reduce((modifiers, modifier) => {
    const value = conditions[modifier];
    if (typeof value === 'boolean') {
      return `${modifiers} ${baseClass}_${modifier}`;
    }

    return `${modifiers} ${baseClass}_${modifier}_${value}`;
  }, '') + ` ${propsClass}`;
};
