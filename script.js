// Função para adicionar valor ao display
function adicionarAoDisplay(value) {
    ;
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
// função para limpar os dois displays
function limparDisplays() {
    document.getElementById('display1').value = '';
    document.getElementById('display').value = '';
}

// Adicionando evento para aceitar entrada do teclado
document.addEventListener('keydown', function (event) {
    const tecla = event.key;

    if (!isNaN(parseInt(tecla)) || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/' || tecla === '.' || tecla === 'Enter') {
        event.preventDefault(); // Evita que a tecla pressionada cause ação padrão

        if (tecla === 'Enter') {
            calcular(); // Se 'Enter' for pressionado, calcula o resultado
        } else {
            adicionarAoDisplay(tecla); // Adiciona o valor do teclado ao display
        }
    }
    
});
// função para apagar o ultimo caractere
function apagarUltimoCaractere() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}
