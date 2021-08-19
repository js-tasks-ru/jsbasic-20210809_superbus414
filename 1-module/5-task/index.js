function truncate(str, maxlength) {
  // ваш код...

  return (maxlength < str.length) ? str.slice(0, maxlength-1) + '…' : str;
}
