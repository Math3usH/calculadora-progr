// Função para adicionar valor ao display
function addToDisplay(value) {
    //let contento = document.getElementById('display').value.toString()+value.toString();
    document.getElementById('display').value += value;
     //document.getElementById('display').value = contento;

}

// Função para calcular o resultado
function calculate  () {
    let display = document.getElementById('display');
    let resultado = eval(display.value); // Usando eval para calcular a expressão inserida
    document.getElementById('display1').value = display.value + "="+resultado;
    display.value = resultado;

}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}
