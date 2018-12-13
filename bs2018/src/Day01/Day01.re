let rec calcFinalFrequency = input =>
  switch (input) {
  | [] => 0
  | [head, ...tails] => head + calcFinalFrequency(tails)
  };

calcFinalFrequency(Day01Input.input) |> Js.log;