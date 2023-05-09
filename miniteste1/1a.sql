SELECT nome FROM "Aluno" WHERE (
    titulacao = "Graduação" AND (endereco = 'Mangabeira' OR endereco = 'Portal do SOL') AND situacao = 'Regular'
)
