import 'utils.dart' as utils;

int core(int initialIndex) {
  var lines = utils.readFile("../inputs/day01.txt");
  var increased = 0;

  for (int index = initialIndex; index < lines.length; index++) {
    int currentNumber = int.parse(lines[index]);
    int prevNumber = int.parse(lines[index - initialIndex]);

    if (currentNumber > prevNumber) {
      increased++;
    }
  }

  return increased;
}

int day01() {
  return core(1);
}

int day01Part2() {
  return core(3);
}
