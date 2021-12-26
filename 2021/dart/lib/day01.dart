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

void day01() {
  print(core(1));
}

void day01Part2() {
  print(core(3));
}
