-- SELECT nome FROM "Aluno" WHERE matricula IN (SELECT mat_aluno FROM "TCC")
SELECT nome FROM "Aluno" INNER JOIN "TCC" ON "TCC".mat_aluno = "Aluno".matricula
