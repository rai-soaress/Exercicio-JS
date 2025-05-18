function numeroPrimo(num) {
  if (num <= 1) return 'Não é primo';
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'Não é primo';
  }
  return 'É primo';
}

console.log(numeroPrimo(7));
console.log(numeroPrimo(10));
