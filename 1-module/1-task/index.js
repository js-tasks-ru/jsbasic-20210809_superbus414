function factorial(n) {
  // ваш код...
    let result  = 1;
    while (n>0){
      result *=n--;
    }
    return result;
  }
  factorial(0); // 1
  factorial(1); // 1
  factorial(3); // 6
  factorial(5); // 120
