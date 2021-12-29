import 'utils.dart' as utils;

int day03() {
  var binaryDiagnostic = utils.readFile("../inputs/day03.txt");
  var gammaRate = "";
  var epsilonRate = "";

  for (int x = 0; x < binaryDiagnostic[0].length; x++) {
    var zeros = 0;
    var ones = 0;
    for (int y = 0; y < binaryDiagnostic.length; y++) {
      if (binaryDiagnostic[y][x] == "0") {
        zeros++;
      } else {
        ones++;
      }
    }

    var maxMin = ones > zeros ? ["0", "1"] : ["1", "0"];
    gammaRate += maxMin[0];
    epsilonRate += maxMin[1];
  }

  return utils.convertBinaryStringToDecimal(gammaRate) *
      utils.convertBinaryStringToDecimal(epsilonRate);
}

int getRating(List<String> list, int charIndex, bool lookMax) {
  List<String> ones = [];
  List<String> zeros = [];

  if (list.length == 1) {
    return int.parse(list[0], radix: 2);
  }

  for (int y = 0; y < list.length; y++) {
    var current = list[y];
    if (list[y][charIndex] == "0") {
      zeros.add(current);
    } else {
      ones.add(current);
    }
  }

  List<String> choosenArray = [];

  if (lookMax) {
    choosenArray = ones.length >= zeros.length ? ones : zeros;
  } else {
    choosenArray = zeros.length <= ones.length ? zeros : ones;
  }
  return getRating(choosenArray, charIndex + 1, lookMax);
}

int day03Part2() {
  var binaryDiagnostic = utils.readFile("../inputs/day03.txt");

  var oxygenGenerator = getRating(binaryDiagnostic, 0, true);
  var co2Scrubber = getRating(binaryDiagnostic, 0, false);

  return oxygenGenerator * co2Scrubber;
}
