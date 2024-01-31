let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}
function verificarIntento() {
	let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
	console.log(intentos);

	if (numeroDeUsuario === numeroSecreto) {
		asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	}
	else {
		// el usuario no acerto
		if (numeroDeUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'el numero secreto es menor');
		}
		else {
			asignarTextoElemento('p', 'el numero secreto es mayor');
		}
		intentos++;
		limpiarCaja();
	}
	return;
}
function limpiarCaja() {
	document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
	//si el numero generado esta en la lista
	console.log(numeroGenerado);
	console.log(listaNumerosSorteados);
	//si ya sorteamos todos los numeros
	if (listaNumerosSorteados.length == numeroMaximo) {
		asignarTextoElemento('p', 'ya se sortearon todos los numero posibles');

	}
	else {
		if (listaNumerosSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		}
		else {
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;

		}
	}
}

function condicionesIniciales() {
	asignarTextoElemento('h1', 'juego del numero secreto.');
	asignarTextoElemento('p', `selecciona un numero del 1 al ${numeroMaximo}.`);
	numeroSecreto = generarNumeroSecreto(); // Agrega los paréntesis para invocar la función
	intentos = 1;
}
function reiniciarJuego() {
	// Limpiar la caja
	limpiarCaja();
	// Indicar mensaje de intervalo de números
	// Generar el numero aleatorio
	// Inicializar el numero de intentos
	condicionesIniciales();
	// Deshabilitar el boton
	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
console.log(numeroSecreto);
