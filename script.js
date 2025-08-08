const btnSomar = document.getElementById("btnSomar");

btnSomar.onclick = function() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let soma = num1 + num2;

  document.getElementById("resultado").textContent = "Resultado: " + soma;
};
