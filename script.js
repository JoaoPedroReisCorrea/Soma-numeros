let botao = document.getElementById("somar");
let input1 = document.getElementById("numero1");
let input2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");

botao.onclick = function() {
  let num1 = Number(input1.value);
  let num2 = Number(input2.value);

  let soma = num1 + num2;

  resultado.textContent = "Resultado: " + soma;
};
