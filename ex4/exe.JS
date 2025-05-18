function resultadoAlunos(aprovacao) {
  return aprovacao.map(aluno => {
    return `${aluno.nome}: ${aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'}`;
  }).join(', ');
}

const alunos = [ { nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 5 }, { nome: 'João', nota: 7 } ];

console.log(resultadoAlunos(alunos));
