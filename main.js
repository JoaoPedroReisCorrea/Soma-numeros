function calcularSoma() {
    
    const valor1 = document.getElementById('numero1').value;
    const valor2 = document.getElementById('numero2').value;
  
    
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
  
    
    const resultado = numero1 + numero2;
  
    
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
  }
  