type TheNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

type Int<T extends number | string> = `${T}` extends ""
  ? true
  : `${T}` extends `${infer L}${infer R}`
  ? L extends `${TheNumber}`
    ? Int<R>
    : false
  : false;

//
type a = Int<1>;
type b = Int<1.323>;
