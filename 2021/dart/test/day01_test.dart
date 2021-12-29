import 'package:dart/day01.dart' as day01;
import 'package:test/test.dart';

void main() {
  test('day01', () {
    expect(day01.day01(), 1266);
  });

  test('day01_part2', () {
    expect(day01.day01Part2(), 1217);
  });
}
