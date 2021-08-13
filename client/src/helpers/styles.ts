import type { Dictionary } from 'common';

/**
 * Return a string containing a suite of css variables based on a dictionary
 *
 * @param vars Dictionary
 * @example
 * ```
 * getStyleVars({
 *   hello: 'cool',
 *   hi: 'yeah',
 * });
 * ```
 *
 * returns the string `--hello: url('cool'); --hi: url('yeah')`
 */
export const getStyleUrlVars = (vars: Dictionary<string>): string => (
  Object.entries(vars)
    .map(([key, value]) => `--${key}: url('${value}');`)
    .join(' ')
);
