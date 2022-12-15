#include "../utils/file_reader.h"
#include <cctype>
#include <iostream>
#include <string>
#include <unordered_set>

int getTypeValue(char letter) {
  int ASCII = std::isupper(letter) ? 38 : 96;
  return int(letter) - ASCII;
}

int getItemPriority(std::string line) {
  std::unordered_set<char> set;
  int mid = line.length() / 2;
  for (int i = 0; i < mid; i++) {
    set.insert(line[i]);
  }
  char repeated;
  for (int i = mid; i < line.length(); i++) {
    if (set.contains(line[i])) {
      repeated = line[i];
    }
  }
  return getTypeValue(repeated);
}

int getItemTypeSumPriorities() {
  FileReader file_reader("../inputs/day03.txt");
  int sum = 0;
  for (std::string line : file_reader) {
    sum += getItemPriority(line);
  }
  return sum;
}

int main() { std::cout << getItemTypeSumPriorities(); }
