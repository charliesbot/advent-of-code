use crate::utils;

pub fn day01() {
    let numbers = utils::read_input_file("src/day01_input.txt")
        .unwrap()
        .iter()
        .map(|x| x.parse().unwrap())
        .collect::<Vec<i32>>();
    let mut result = 0;
    for index in 1..numbers.len() {
        if numbers[index] > numbers[index - 1] {
            result = result + 1;
        }
    }

    println!("{}", result);
}

pub fn day01_part2() {
    let numbers = utils::read_input_file("src/day01_input.txt")
        .unwrap()
        .iter()
        .map(|x| x.parse().unwrap())
        .collect::<Vec<i32>>();

    let mut result = 0;
    let mut value1 = numbers[0] + numbers[1] + numbers[2];
    let mut value2 = numbers[1] + numbers[2];

    for index in 3..numbers.len() {
        value2 = value2 + numbers[index];
        if value2 > value1 {
            result = result + 1;
        }

        value1 = value2;
        value2 = value2 - numbers[index - 2];
    }
}
