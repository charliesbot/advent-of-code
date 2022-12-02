#include "../utils/file_reader.h"
#include <algorithm>
#include <iostream>
#include <string>

int getElfWithMaxCalories() {
  FileReader file_reader("../inputs/day01.txt");
  int max = 0;
  int counter = 0;
  for (std::string line : file_reader) {
    if (line.empty()) {
      max = std::max(max, counter);
      counter = 0;
      continue;
    }
    counter += std::stoi(line);
  }
  return max;
}

int main() { std::cout << getElfWithMaxCalories(); }
