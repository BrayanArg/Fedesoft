function calcularNota() {
  let nota1 = parseInt(document.getElementById("inputN1").value);
  let nota2 = parseInt(document.getElementById("inputN2").value);
  let nota3 = parseInt(document.getElementById("inputN3").value);
  let total = (nota1 + nota2 + nota3) / 3;
  document.getElementById("notaFinal").value = total.toFixed(1);
}


