const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value="";
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    
  }

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
  
    return stringDesencriptado;
  }
  
function copiarTexto() {
  const texto = mensaje.value;
  
  // Crear un elemento de texto temporal
  const portapapeles = document.createElement('textarea');
  portapapeles.value = texto;
  
  // Añadir el elemento temporal al documento
  document.body.appendChild(portapapeles);
  
  // Seleccionar y copiar el texto
  portapapeles.select();
  document.execCommand('copy');
  
  // Remover el elemento temporal
  document.body.removeChild(portapapeles);
  
  // Mostrar una notificación o realizar cualquier otra acción adicional si es necesario
  alert('Texto copiado al portapapeles');
}
  