function getMinMax(str) {
  // ваш код...
 // let min = Math.min(...str.split(' '));
 // let max = Math.max(...str.split(' '));
 //Начал делать через присвоение переменных min и max, но потом понял(да и решение у других людей в обсуждении было более логичное с точки зрения последовательности действий), что сделал
 //что-то не то.
let strArr = str.split(' ').filter(item => !isNaN(item) ? item : false);
return {
  min : Math.min(...strArr),
  max : Math.max(...strArr)
}
}