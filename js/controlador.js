$("#iniciar").click(initLogin);

function initLogin(){
	var usuario = document.getElementById("usuario").value;
	var password = document.getElementById("contraseña").value;

	var user = new Login(usuario, password);
	user.verificarUser();
}