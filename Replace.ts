type Replace<
  T extends string,
  F extends string,
  TO extends string
> = F extends ""
  ? T
  : T extends `${infer L}${F}${infer R}`
  ? `${Replace<L, F, TO>}${TO}${Replace<R, F, TO>}`
  : T;

type replaced = Replace<"types are fun fun", "fun", "awesome">;
