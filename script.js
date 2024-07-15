function calcularMediaFinal() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
    let status;

    if (mediaFinal >= 7.0) {
        status = "Aprovado";
    } else if (mediaFinal >= 5.0) {
        status = "Em recuperação";
    } else {
        status = "Reprovado";
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Média Final: ${mediaFinal.toFixed(2)}<br>Status: ${status}`;
}