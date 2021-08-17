function truncate(str, maxlength) {
  return (maxlength < str.length) ? str.slice(0, maxlength-1) + '…' : str;
}
