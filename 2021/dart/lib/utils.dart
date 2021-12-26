import 'dart:io';

List<String> readFile(String path) {
  return File(path).readAsLinesSync();
}
