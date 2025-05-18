function dobrarPares(dobrar) {
  return dobrar.filter(num => num % 2 === 0).map(num => num * 2);
}

const numeros = [1, 2, 3, 4, 5, 6];

console.log(dobrarPares(numeros));