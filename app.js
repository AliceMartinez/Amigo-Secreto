// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];


function agregarAmigo(){
    let nombreAmigo= document.getElementById("amigo").value.trim();
    if (nombreAmigo === "") {        
        alert("Por favor, ingresa un nombre válido");
        return;
    } else {
        amigos.push(nombreAmigo);
    }  
    
    mostrarListaAmigos();
    
    document.getElementById("amigo").value = "";

    console.log(amigos);
}

function mostrarListaAmigos(){


    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "La Lista de Amigos es: "; 
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
}}

function sortearAmigo() {
if (amigos.length === 0){
    alert("Ingresa Amigos para Sortear");  
    return;
}


let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indiceAleatorio];

console.log(indiceAleatorio)
console.log(amigoSorteado)

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`;
 document.getElementById("listaAmigos").style.display = "none";

amigos.splice(indiceAleatorio, 1); // Elimina el amigo sorteado de la lista

 // Verifica si ya no quedan amigos después del sorteo
    if (amigos.length === 0) {
        alert("¡Ya no quedan amigos para sortear!");
    }
    
}











