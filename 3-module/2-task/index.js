function filterRange(arr, a, b) {
  // ваш код...
  let filterArr = arr.filter(item => (a <= item && item <=b));
  return filterArr;
}
