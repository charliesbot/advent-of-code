#include <fstream>
#include <string>

class End_iterator {};

class Iterator {
public:
  Iterator(std::ifstream &file) : file_{file} { next(); }

  const std::string &operator*() const { return str_; }

  Iterator &operator++() {
    next();
    return *this;
  }

  bool operator!=(End_iterator) const { return !!file_; }

private:
  void next() { std::getline(file_, str_); }

  std::ifstream &file_;
  std::string str_;
};

class FileReader {
public:
  explicit FileReader(std::string filepath) { file_.open(filepath); }

  auto begin() { return Iterator{file_}; }

  auto end() { return End_iterator{}; }

private:
  std::ifstream file_;
};
