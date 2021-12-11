use crate::utils;

pub fn day02() {
    let steps: Vec<String> = utils::read_input_file("src/day02_input.txt").unwrap();
    let mut depth = 0;
    let mut horizontal = 0;

    for step in steps {
        let mut iter = step.split_whitespace();
        let direction = iter.next().unwrap();
        let value: i32 = iter.next().unwrap().parse().unwrap();

        match direction {
            "up" => depth = depth - value,
            "forward" => horizontal = horizontal + value,
            "down" => depth = depth + value,
            &_ => (),
        }
    }

    println!("{}", depth * horizontal);
}

pub fn day02_part2() {
    let steps: Vec<String> = utils::read_input_file("src/day02_input.txt").unwrap();
    let mut depth = 0;
    let mut horizontal = 0;
    let mut aim = 0;

    for step in steps {
        let mut iter = step.split_whitespace();
        let direction = iter.next().unwrap();
        let value: i32 = iter.next().unwrap().parse().unwrap();

        match direction {
            "up" => aim = aim - value,
            "down" => aim = aim + value,
            "forward" => {
                horizontal = horizontal + value;
                depth = depth + aim * value;
            }
            &_ => (),
        }
    }

    println!("{}", depth * horizontal);
}
