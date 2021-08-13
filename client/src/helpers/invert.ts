/**
 * Usage: https://lodash.com/docs/4.17.15#invert
 * @param object
 */
const invert = <
  K extends string | number | symbol,
  V extends string | number | symbol,
  > (o: Record<K, V>): { [k in V]: K } => {
  const ret = {};
  Object.keys(o).forEach((key: string) => {
    ret[o[key] as string] = key;
  });
  return ret as { [k in V]: K; };
};

export default invert;
