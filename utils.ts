const getInputLines = async (fileName: string): Promise<Array<string>> => {
  const text = await Deno.readTextFile(fileName);
  return text.split("\n");
};

export { getInputLines };
