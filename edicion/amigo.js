
let amigos = [];


function agregarAmigo() {
    let input = document.getElementById("amigo").value.trim();

    if (input === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(input);
    document.getElementById("amigo").value = ""; // Limpiar el input
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    document.getElementById("resultado").innerHTML = <li>El amigo secreto es: <strong>${ganador}</strong></li>;
}