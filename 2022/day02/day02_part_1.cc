#include "../utils/file_reader.h"
#include <algorithm>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

int getPoints(char oponent_option, char current_option) {
  int points = 0;
  struct Data {
    char option;
    int value;
  };

  const std::unordered_map<char, char> comparation = {
      {'A', 'X'},
      {'B', 'Y'},
      {'C', 'Z'},
  };

  const std::unordered_map<char, Data> game_options = {
      {'X', {'C', 1}},
      {'Y', {'A', 2}},
      {'Z', {'B', 3}},
  };

  const Data selection = game_options.at(current_option);

  if (selection.option == oponent_option) {
    points += 6;
  } else {
    points += comparation.at(oponent_option) == current_option ? 3 : 0;
  }

  return points + selection.value;
}

int getTotalScoreInGame() {
  FileReader file_reader("../inputs/day02.txt");
  int sum = 0;
  for (std::string line : file_reader) {
    std::vector<char> options;
    for (const char letter : line) {
      if (letter != ' ') {
        options.push_back(letter);
      }
    }
    sum += getPoints(options[0], options[1]);
  }

  return sum;
}

int main() {
  std::cout << getTotalScoreInGame();
  return 1;
}
