
function mostrarContenido() {
    var miDiv = document.getElementById("resultado");
    miDiv.innerText = "";
    
    var textarea = document.getElementById("txtEscribir");
    var contenido = document.getElementById("resultado");
    contenido.innerText = textarea.value;
}

function encriptarTexto(){
    let textarea = document.getElementById("txtEscribir");
    let texto = textarea.value;
    let textareamod;
    textareamod = texto.replace(/[eiaou]/g, function(match) {
        switch(match) {
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'a':
            return 'ai';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        }
    });
    let miDiv = document.getElementById("resultado");
    miDiv.innerText = "";
    let contenido = document.getElementById("resultado");
    contenido.innerText = textareamod;   
}




function desencriptarTexto() {


    let textarea = document.getElementById("txtEscribir");
    let textareamod = textarea.value;


    var cambios = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
    
    for (var palabra in cambios) {
      var letra = cambios[palabra];
      var expresion = new RegExp(palabra, "g");
      textareamod = textareamod.replace(expresion, letra);
    }
    
    let miDiv = document.getElementById("resultado");
    miDiv.innerText = "";
    let contenido = document.getElementById("resultado");
    contenido.innerText = textareamod;   
  }