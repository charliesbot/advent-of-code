import 'package:dart/day02.dart' as day02;
import 'package:test/test.dart';

void main() {
  test('day02', () {
    expect(day02.day02(), 1762050);
  });

  test('day02_part2', () {
    expect(day02.day02Part2(), 1855892637);
  });
}
