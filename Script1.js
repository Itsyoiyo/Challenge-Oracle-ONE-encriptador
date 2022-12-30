let encryptButton = document.getElementById('encrypt-button');
let decryptButton = document.getElementById('decrypt-button');
let outcomeArea = document.getElementById('output-text');
let finalText = document.getElementById('final-text');
let graph = document.getElementById('graph');
let title = document.getElementById('titulo');


let copiar = document.getElementById("copy-button");
copiar.addEventListener('click', async (event) => {
    const content = document.getElementById('final-text').textContent;
    await navigator.clipboard.writeText(content);
})


function soloLetras(e) {
    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key),
        letras = " abcdefghijklmnñopqrstuvwxyz",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;

    for (let i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert("Caractér invalido, recuerde ingresar solo letras minúsculas y sin acentos");
        return false;
    }
}



function imprimir(msg) {
    finalText.innerHTML = msg;
    graph.style.display = "none";
    title.style.display = "none";
    copiar.style.display = "block";
    document.getElementById('text-in').value = "";
    outcomeArea.style.display = "flex";
    outcomeArea.style.flexWrap = "wrap";
    outcomeArea.style.flexDirection = "column";
    outcomeArea.style.justifyContent = "space-between"
    finalText.style.textAlign = "left";
}

function encrypt() {
    let msg = document.getElementById('text-in').value;
    let letter = "";
    let msgEncrypted = "";

    for (let i = 0; i < msg.length; i++) {
        letter = msg.charAt(i);

        if (letter == "a") msgEncrypted = msgEncrypted + "ai"
        else {
            if (letter == "e") msgEncrypted = msgEncrypted + "enter"
            else {
                if (letter == "i") msgEncrypted = msgEncrypted + "imes"
                else {
                    if (letter == "o") msgEncrypted = msgEncrypted + "ober"
                    else {
                        if (letter == "u") msgEncrypted = msgEncrypted + "ufat"
                        else msgEncrypted = msgEncrypted + letter;
                    }
                }
            }
        }
    }
    imprimir(msgEncrypted);

}

function decrypt() {
    let msg = document.getElementById('text-in').value;
    let letter = "";
    let msgDecrypted = "";

    for (let i = 0; i < msg.length; i++) {
        letter = msg.charAt(i);

        if (letter == "a") {
            msgDecrypted = msgDecrypted + "a"
            i = i + 1;
        }
        else {
            if (letter == "e") {
                msgDecrypted = msgDecrypted + "e"
                i = i + 4;
            }
            else {
                if (letter == "i") {
                    msgDecrypted = msgDecrypted + "i"
                    i = i + 3;
                }
                else {
                    if (letter == "o") {
                        msgDecrypted = msgDecrypted + "o"
                        i = i + 3;
                    }
                    else {
                        if (letter == "u") {
                            msgDecrypted = msgDecrypted + "u"
                            i = i + 3;
                        }
                        else msgDecrypted = msgDecrypted + letter;
                    }
                }
            }
        }
    }
    imprimir(msgDecrypted);
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;

