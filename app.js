
// Crear un array para almacenar los nombres
const amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // trim() elimina espacios en blanco al inicio y al final

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostramos un mensaje de error si el campo está vacío
        return;
    }

    // Agregamos el nombre al array amigos
    amigos.push(nombre);
    
    // Limpiamos el campo de entrada después de agregar el nombre
    input.value = "";
    
    // Llamamos a la función para actualizar la lista de amigos en la pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtenemos el elemento de la lista en el HTML
    const lista = document.getElementById("listaAmigos");
    
    // Limpiamos la lista antes de agregar nuevos elementos para evitar duplicados
    lista.innerHTML = "";
    
    // Recorremos el array amigos y creamos un elemento <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Creamos un nuevo elemento de lista <li>
        li.textContent = amigos[i]; // Asignamos el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Agregamos el <li> dentro de la lista en el HTML
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Mensaje de error si la lista está vacía
        return;
    }
    
    // Generamos un índice aleatorio usando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtenemos el nombre del amigo seleccionado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostramos el resultado en el HTML
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos.length = 0; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}


