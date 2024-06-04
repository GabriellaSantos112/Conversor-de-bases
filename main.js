function convert() {
    let number = document.getElementById('number').value;
    let fromBase = parseInt(document.getElementById('fromBase').value);
    let toBase = parseInt(document.getElementById('toBase').value);
    let result = document.getElementById('result');

    // Convertendo o número para maiúsculas para suportar letras hexadecimais
    number = number.toUpperCase();
    
    // Verificar se o número é válido na base de origem
    if (isNaN(parseInt(number, fromBase))) {
        result.textContent = "Número inválido para a base de origem.";
        return;
    }
    
    // Converter o número para base decimal
    let decimalNumber = parseInt(number, fromBase);
    
    // Converter o número decimal para a base de destino
    let convertedNumber = decimalNumber.toString(toBase).toUpperCase();
    
    result.textContent = `Resultado: ${convertedNumber}`;
}