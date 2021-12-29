import 'dart:io';

List<String> readFile(String path) {
  return File(path).readAsLinesSync();
}

int convertBinaryStringToDecimal(String binaryString) {
  return int.parse(binaryString, radix: 2);
}
