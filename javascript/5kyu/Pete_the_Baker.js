function cakes(recipe, available) {
  const result = [];

  for (const [key, value] of Object.entries(recipe)) {
    if (Object.keys(available).includes(key)) {
      result.push(Math.floor(available[key] / value));
    } else {
      return 0;
    }
  }
  return Math.min(...result);
}
