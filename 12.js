//Write a function to find the longest common prefix string amongst an array of strings.

function longestPrefix(str) {
  if (str.length === 0) return "";
  str.sort();
  const first = str[0];
  const last = str[str.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
}

longestPrefix(["flower", "faow", "flight"]); // "fl"
