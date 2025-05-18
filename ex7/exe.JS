function somaArray(soma) {
  return soma.reduce((acc, num) => acc + num, 0);
}

console.log(somaArray([1, 2, 3, 4, 5]));
