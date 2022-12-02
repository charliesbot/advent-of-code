#include "../utils/file_reader.h"
#include <algorithm>
#include <fstream>
#include <functional>
#include <iostream>
#include <string>
#include <vector>

int getElfWithMaxCalories() {
  FileReader file_reader("../inputs/day01.txt");
  std::vector<int> calories;
  int counter = 0;
  for (std::string line : file_reader) {
    if (line.empty()) {
      calories.push_back(counter);
      counter = 0;
      continue;
    }
    counter += std::stoi(line);
  }

  sort(calories.begin(), calories.end(), std::greater<int>());

  return calories.at(0) + calories.at(1) + calories.at(2);
}

int main() { std::cout << getElfWithMaxCalories(); }
