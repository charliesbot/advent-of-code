export const parseLine = (string, forward, backward) => {
  const words = string.split(" ");
  const to = words[1];
  const from = words[7];

  forward[to] = forward[to] || [];
  forward[from] = forward[from] || [];

  backward[from] = backward[from] || [];
  backward[to] = backward[to] || [];

  forward[to].push(from);
  backward[from].push(to);
};
