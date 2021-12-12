use crate::utils;

pub fn day03() {
    let binary_diagnostic = utils::read_input_file("src/day03_input.txt")
        .unwrap()
        .iter()
        .map(|x| x.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();

    let mut gamma_rate = Vec::new();
    let mut epsilon_rate = Vec::new();

    for x in 0..binary_diagnostic[0].len() {
        let mut zeros = 0;
        let mut ones = 0;
        for y in 0..binary_diagnostic.len() {
            if (binary_diagnostic[y][x] == '0') {
                zeros = zeros + 1;
            } else {
                ones = ones + 1;
            }
        }

        let max_min = if ones > zeros { ["0", "1"] } else { ["1", "0"] };

        gamma_rate.push(max_min[0]);
        epsilon_rate.push(max_min[1])
    }

    let gamma_rate_value = isize::from_str_radix(&gamma_rate.join(""), 2).unwrap();
    let epsilon_rate_value = isize::from_str_radix(&epsilon_rate.join(""), 2).unwrap();

    println!("{}", gamma_rate_value * epsilon_rate_value);
}

pub fn day03_part2() {
    let binary_diagnostic = utils::read_input_file("src/day03_input.txt")
        .unwrap()
        .iter()
        .map(|x| x.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();

    let mut gamma_rate = Vec::new();
    let mut epsilon_rate = Vec::new();

    for x in 0..binary_diagnostic[0].len() {
        let mut zeros = 0;
        let mut ones = 0;
        for y in 0..binary_diagnostic.len() {
            if (binary_diagnostic[y][x] == '0') {
                zeros = zeros + 1;
            } else {
                ones = ones + 1;
            }
        }

        let max_min = if ones > zeros { ["0", "1"] } else { ["1", "0"] };

        gamma_rate.push(max_min[0]);
        epsilon_rate.push(max_min[1])
    }

    let gamma_rate_value = isize::from_str_radix(&gamma_rate.join(""), 2).unwrap();
    let epsilon_rate_value = isize::from_str_radix(&epsilon_rate.join(""), 2).unwrap();

    println!("{}", gamma_rate_value * epsilon_rate_value);
}
