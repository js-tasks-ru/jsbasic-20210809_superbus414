function checkSpam(str) {
  // ваш код...
  /* 1ый способ
  let checkStr = str.toLowerCase();
  if(checkStr.includes('1xbet')){
  return true;
}else if(checkStr.includes('xxx')){
  return true;
}else{
    return false;
  }
  */
 let checkStr = str.toLowerCase();
 return checkStr.includes('1xbet') || checkStr.includes('xxx') ? true : false;
}
