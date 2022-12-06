#include "../utils/file_reader.h"
#include <algorithm>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

int getPoints(char oponent_option, char current_option) {
  int points = 0;

  const std::unordered_map<char, char> values = {
      {'A', 1},
      {'B', 2},
      {'C', 3},
  };

  const std::unordered_map<char, char> game_options = {
      {'A', 'C'},
      {'B', 'A'},
      {'C', 'B'},
  };

  const std::unordered_map<char, char> game_options_alternative = {
      {'C', 'A'},
      {'A', 'B'},
      {'B', 'C'},
  };

  if (current_option == 'Z') {
    return 6 + values.at(game_options_alternative.at(oponent_option));
  }

  if (current_option == 'Y') {
    return 3 + values.at(oponent_option);
  }

  return values.at(game_options.at(oponent_option));
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
    int b = getPoints(options[0], options[1]);
    sum += b;
  }

  return sum;
}

int main() {
  std::cout << getTotalScoreInGame();
  return 1;
}
