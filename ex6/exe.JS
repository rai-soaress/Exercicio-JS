function quadradosMaioresQueDez(quadrado) {
  return quadrado.filter(num => num > 10).map(num => num * num);
}

console.log(quadradosMaioresQueDez([5, 12, 8, 20, 3]));
