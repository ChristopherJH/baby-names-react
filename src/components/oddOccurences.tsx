function oddOccurences(favArray: string[], name: string): boolean {
  let count = 0;
  for (const fav of favArray) {
    if (fav === name) {
      count += 1;
    }
  }
  return count % 2 !== 0;
}

export default oddOccurences;
