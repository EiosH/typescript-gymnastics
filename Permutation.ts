type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends P
  ? [T, ...Permutation<Exclude<P, T>>]
  : [];

type perm = Permutation<"A" | "B" | "C" | "D">;
