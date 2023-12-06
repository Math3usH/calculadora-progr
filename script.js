// Função para adicionar valor ao display
function adicionarAoDisplay(value) {;
    //Função serve para adicionar valores ao campo de exibição da calculadora sempre que um botão numérico ou operador for pressionado
     document.getElementById('display').value += value; 
}

// Função para calcular o resultado
function calcular() {
    let display = document.getElementById('display');
    let resultado = eval(display.value); // Usando eval para calcular a expressão inserida
    // histórico do resultado
    document.getElementById('display1').value = display.value + "=" + resultado;
    display.value = resultado;
}



// Função para limpar o display
function limparDisplay() {
    document.getElementById('display').value = '';
}
