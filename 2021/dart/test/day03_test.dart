import 'package:dart/day03.dart' as day03;
import 'package:test/test.dart';

void main() {
  test('day03', () {
    expect(day03.day03(), 1458194);
  });

  test('day03_part2', () {
    expect(day03.day03Part2(), 2829354);
  });
}
