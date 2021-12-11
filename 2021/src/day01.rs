use crate::utils;

pub fn day01() {
    let numbers =
        utils::convert_string_to_int_vector(utils::read_input_file("src/day01_input.txt").unwrap());
    let mut result = 0;
    for index in 1..numbers.len() {
        if numbers[index] > numbers[index - 1] {
            result = result + 1;
        }
    }

    println!("{}", result);
}

pub fn day01_part2() {
    let numbers =
        utils::convert_string_to_int_vector(utils::read_input_file("src/day01_input.txt").unwrap());

    let mut result = 0;

    for index in 3..numbers.len() {
        if numbers[index] > numbers[index - 3] {
            result = result + 1;
        }
    }

    println!("{}", result);
}
