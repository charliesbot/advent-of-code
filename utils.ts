const getInputLines = async (fileName: string): Promise<Array<string>> => {
  const text = await Deno.readTextFile(fileName);
  return text.split("\n").filter((t: string | undefined) => t);
};

export { getInputLines };
