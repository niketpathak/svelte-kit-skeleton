import type { Dictionary } from 'common';

const omit = <T extends Dictionary>(obj: T, arr: string[]): Dictionary => (
  Object.keys(obj)
    .filter((k) => arr.indexOf(k) > -1)
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Dictionary)
);

export default omit;
