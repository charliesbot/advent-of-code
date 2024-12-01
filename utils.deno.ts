export async function readFile(filePath: string): Promise<string[]> {
  const fileReader = await Deno.open(filePath);
  const lines: string[] = [];
  const decoder = new TextDecoder("utf-8");
  const buffer = new Uint8Array(1024); // Adjust buffer size as needed
  let remaining = "";

  try {
    while (true) {
      const bytesRead = await fileReader.read(buffer);
      if (bytesRead === null) break;

      // Decode the chunk and combine with remaining
      const chunk = decoder.decode(buffer.subarray(0, bytesRead));
      const combined = remaining + chunk;

      // Split by newline and process lines
      const parts = combined.split("\n");
      // Save the incomplete part for the next iteration
      remaining = parts.pop() || "";
      lines.push(...parts);
    }

    // Add the final leftover line, if any
    if (remaining) {
      lines.push(remaining);
    }
  } finally {
    fileReader.close();
  }

  return lines;
}
