type AppendArgument<T, Y> = T extends (...params: infer P) => infer R
  ? (params: [...P, Y]) => R
  : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
