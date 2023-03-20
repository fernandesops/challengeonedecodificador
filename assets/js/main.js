/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

const input = document.querySelector("#input-texto");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");

document.getElementById("aparece").style.display = 'none';
inputverificar();

document.getElementById('btn-criptografar').onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensagem.value = textoEncriptado;
    aparece()
}

document.getElementById('btn-descriptografar').onclick = (e) => {
    e.preventDefault();
    const textoDecriptado = decodificar(input.value);
    mensagem.value = textoDecriptado;
    aparece()
}

document.getElementById('btn-copiar').onclick = (e) => {
    e.preventDefault();
    const mensagem = document.querySelector("#mensagem");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
}

function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return stringEncriptada
}

function decodificar(stringDecriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDecriptada = stringDecriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDecriptada.includes(matrixCode[i][1])) {
            stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDecriptada
}

function aparece() {
    document.getElementById("desaparece").style.display = 'none';
    document.getElementById("aparece").style.display = 'block';
}

function reset() {
    document.getElementById("aparece").style.display = 'none';
    document.getElementById("desaparece").style.display = 'block';
    input.value = "";
    mensagem.value = "";
}

function inputverificar() {
    var inputPalavra = document.querySelector("#input-texto");
    inputPalavra.addEventListener("keypress", function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);

        if (keyCode > 47 && keyCode < 65) {
            e.preventDefault();
        }
    });
}