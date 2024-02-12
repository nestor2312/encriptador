
function Encriptar(){
    let texto = document.getElementById('text').value.toLowerCase();
    let destino = document.getElementById('aEncriptar');
    if (texto === '') {
        destino.textContent = texto === '' ? 'Ningún mensaje fue encontrado' : texto;
    } else {
        let textoEncriptado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        destino.textContent = textoEncriptado;
    }
    console.log('el texto a Encriptar es -> ' + texto);
}

function validar(){
    let texto = document.getElementById('text').value;
    let validar = document.getElementById('validar');

    let mayusculas = /[A-Z @$%#]/.test(texto);
    if(mayusculas ){
        validar.classList.add('textoInvalido');
    }
    else{
        Encriptar();
        validar.classList.remove('textoInvalido');
    }
}


function copiar() {
  
    let textoParaCopiar = document.getElementById('aEncriptar').textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        console.log('El texto ha sido copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function Desencriptar(){
    let texto = document.getElementById('text').value;
    let destino = document.getElementById('aEncriptar');
    if (texto === '') {
        destino.textContent = texto === '' ? 'Ningún mensaje fue encontrado' : texto;
    } else {
        let textoEncriptado = texto.replace(/ai/g, 'a')
                                    .replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
                                    destino.textContent = textoEncriptado;
    }
    console.log('el texto a Desencriptar es -> ' + texto);
}
