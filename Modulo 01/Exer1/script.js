<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
</head>
<body>
    <h1>Idade</h1>
    <p>Este é um parágrafo em HTML.</p>

    <script>
        const nome = "Lucas Ferreira dos Santos";
        const cidade = "Assis Chateaubriand";
        const diaNascimento = "12/08/2009";
        const anoAtual = 2026;
        const anoNascimento = 2009;

        const idade = anoAtual - anoNascimento;

        const frase = `Quem nasceu em ${anoNascimento} completa ${idade} anos em ${anoAtual}.`;

        console.log(frase);
    </script>
</body>
</html>

