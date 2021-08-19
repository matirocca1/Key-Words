let invitado = {
    nombre:"invitado",   /* Al entrar a la pagina sin iniciar sesion, en el html hay un mensaje de bienvenida al invitado */
    clave:''

}
document.getElementById("saludoUser").innerHTML=" Bienvenido " + local.leer("UsuarioActual", invitado).nombre;
/* Esta funcion imprime el saludo de Bienvenida con el nombre de usuario que haya iniciado sesión */