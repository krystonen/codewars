var maxSequence = function (arr) {
  let maxEnds = 0;
  let maxSoFar = 0;

  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    maxEnds = maxEnds + arr[i];
    if (maxEnds < 0) {
      maxEnds = 0;
    }
    if (maxSoFar < maxEnds) {
      maxSoFar = maxEnds;
    }
  }
  return maxSoFar;
};
