type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer L}${infer R}`
  ? LengthOfString<R, [L, ...T]>
  : T["length"];

type lengthOfString = LengthOfString<"你好dddd">;
