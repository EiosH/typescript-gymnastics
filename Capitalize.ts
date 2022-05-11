type Capitalize1<T extends string> = T extends `${infer Y}${any}`
  ? Uppercase<Y>
  : never;

type capitalized = Capitalize1<"hello world">;
