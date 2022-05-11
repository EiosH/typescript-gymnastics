type Test = { id: "1" };
type AppendToObject<T, Y extends string, X> = T & {
  [K in Y]: X;
};
type appendToObject = AppendToObject<Test, "value", 4>;
let a: appendToObject;
