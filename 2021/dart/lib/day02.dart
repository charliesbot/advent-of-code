import 'utils.dart' as utils;

int day02() {
  var lines = utils.readFile("../inputs/day02.txt");
  var depth = 0;
  var horizontal = 0;

  for (var line in lines) {
    var step = line.split(" ");
    var direction = step[0];
    var value = int.parse(step[1]);

    if (direction == "forward") {
      horizontal += value;
    }

    if (direction == "down") {
      depth += value;
    }

    if (direction == "up") {
      depth -= value;
    }
  }

  return depth * horizontal;
}

int day02Part2() {
  var lines = utils.readFile("../inputs/day02.txt");
  var depth = 0;
  var horizontal = 0;
  var aim = 0;

  for (var line in lines) {
    var step = line.split(" ");
    var direction = step[0];
    var value = int.parse(step[1]);

    if (direction == "forward") {
      horizontal += value;
      depth += aim * value;
    }

    if (direction == "down") {
      aim += value;
    }

    if (direction == "up") {
      aim -= value;
    }
  }

  return depth * horizontal;
}
