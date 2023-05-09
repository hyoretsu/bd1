WITH apresentaramTCC AS (
    SELECT mat_aluno FROM "TCC" WHERE ano_defesa = 2020
)
SELECT nome, titulo FROM "Aluno", "TCC" WHERE matricula IN apresentaramTCC
