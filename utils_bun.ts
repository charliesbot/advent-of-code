export const getInputLines = async (path: string): Promise<string[]> => {
  const file = await Bun.file(path).text();
  return file.split("\n");
};
