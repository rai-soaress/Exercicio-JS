function somaArray(soma) {
  return soma.reduce((soma, num) => soma + num, 0);
}

console.log(somaArray([1, 2, 3, 4, 5]));
