open Belt;

module IntCmp =
  Id.MakeComparable({
    type t = int;
    let cmp = Pervasives.compare;
  });

let input = Day01Input.input;

let rec firstRepeatedFreq = (frequencies, sumFreq, acumSum) =>
  switch (frequencies) {
  | [] => firstRepeatedFreq(input, sumFreq, acumSum)
  | [head, ...tails] =>
    let sum = acumSum + head;
    Set.has(sumFreq, sum) ?
      sum : firstRepeatedFreq(tails, Set.add(sumFreq, sum), sum);
  };

let set = Set.make(~id=(module IntCmp));

firstRepeatedFreq(input, set, 0) |> Js.log;
