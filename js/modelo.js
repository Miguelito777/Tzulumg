/**
* Clase login
*/
function Login(usuario, contrasenia){
	this.user = usuario;
	this.password = contrasenia;
}
Login.prototype.verificarUser = function(){
	alert("El usuario a verificar es "+this.user+" y su passord es "+this.password);
}
/**
* clase atleta
*/

function Atleta(){
	this.dpi;
	this.nombre;
	this.fechaNacimiento;
	this.procedencia;
	this.privilegiio;
}

/**
* Clase Categoria
*/

function Categoria(){
	this.idCategoria;
	this.nombre;
	this.atletas = [];
}
Categoria.prototype.obtenerAtletas = function(){
	console.log("A continuacion voy a obtener los atletas");
} 

/**
*	Clase Digitador
*/

function Digitador(){
	this.dpi;
	this.nombre;
	this.telefono;
}
Digitador.prototype.registrarDatosAtleta = function(nombre, fechaNacimiento, direccion, sexo){
	console.log("A continuacion voy a registrar a los atletas");
}

Digitador.prototype.asignarPrivilegio = function(){
	console.log("A continuacion voy a asignar un privilegio");
}

Digitador.prototype.inscribirAtleta = function(){
	console.log("Inscribir atleta");
}


/**
*	Clase Privilegio
*/
function Privilegio(){
	this.idPrivilegio;
	this.tipoPrivilegio;
	this.nombrePrivilegio;
	this.atletas = [];
}
Privilegio.prototype.obtenerAtletas = function(){
	console.log("voy a obtener los atletas de privilegio");
}

/**
*	Clase Asignador de numero
*/

function AsignadorDeNumero(){
	this.dpi;
	this.nombre;
	this.telefono;
}
AsignadorDeNumero.prototype.obtenerNumeroAtleta = function(dpiAtleta){
	console.log("Voy a obtener el numero del atleta");
}
AsignadorDeNumero.prototype.darAltaAtleta = function(dpiAtleta){
	console.log("Voy a dar de alta al atleta con el dpi que estoy recibiendo");
}

/**
*	Clase Administrador
*/

function Administrador(){
	this.idAdministrador;
	this.nombre;
	this.correo;
}
Administrador.prototype.solicitarReporte = function(categoria){
	//
}
Administrador.prototype.cuadreCaja = function(parametroCuadre){

}

/**
* Clase reporte
*/
function Reporte(){
	this.idReporte;
	this.categoria;
	this.privilegio;
	this.rama;
}
