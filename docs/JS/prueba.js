class Usuarios {
    constructor({nombre,clave}){
    this.nombre= nombre;
    this.clave= clave;
    }
}
function verificarUsuario(usuario,baseDeDatos){
    console.log(usuario)
    return baseDeDatos.find(user => user.nombre == usuario.nombre && user.clave == usuario.clave)?true:false;
}


/* Estas funciones toman los nombres y claves y verifican para iniciar sesion en la pagina */
