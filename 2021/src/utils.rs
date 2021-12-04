use std::fs::File;
use std::io::{BufRead, BufReader, Error};

pub fn read_input_file(path: &str) -> Result<Vec<String>, Error> {
    let input = File::open(path)?;
    let buffered = BufReader::new(input);
    let mut data = vec![];

    for line in buffered.lines() {
        data.push(line?);
    }

    Ok(data)
}
