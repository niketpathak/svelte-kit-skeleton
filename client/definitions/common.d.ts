declare module 'common' {
  export type Dictionary<T = unknown> = Record<string, T>;
  export type PartialRecord<K extends keyof Dictionary, T> = { [P in K]?: T };

  export type FN<T = unknown> = (...args: T[]) => T;

  export interface Exception {
    statusCode: number;
    message: string;
  }
}
