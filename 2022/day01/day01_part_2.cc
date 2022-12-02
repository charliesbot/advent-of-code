#include "../utils/file_reader.h"
#include <algorithm>
#include <fstream>
#include <iostream>
#include <queue>
#include <string>

int getElfWithMaxCalories() {
  FileReader file_reader("../inputs/day01.txt");
  int counter = 0;
  std::priority_queue<int> priority_queue;
  for (std::string line : file_reader) {
    if (line.empty()) {
      priority_queue.push(counter);
      counter = 0;
      continue;
    }
    counter += std::stoi(line);
  }

  int top_sum = 0;
  for (int i = 1; i <= 3; i++) {
    top_sum += priority_queue.top();
    priority_queue.pop();
  }

  return top_sum;
}

int main() { std::cout << getElfWithMaxCalories(); }
