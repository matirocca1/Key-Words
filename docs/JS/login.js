let usuariosArray = []
usuariosJson.forEach(usuario => usuariosArray.push(new Usuarios(usuario)));

console.log(local.leer("usuariosLocal",usuariosJson));

const usuarios = [];         /* Todas estas funciones validan el nombre y clave cuando inicias sesion en la pagina */
let registrar = (evento) => {
    evento.preventDefault();
    let usuario = document.getElementById("registroUsuario").value;
    let contraseña = document.getElementById("registroContraseña").value;
    let data = {nombre: usuario, clave: contraseña};
    usuariosArray.push(new Usuarios(data));
    local.guardar('usuariosLocal',usuariosArray);
}

/* ---------------------------------------------------------------------------------- */

const ingresar = (evento) =>{
    evento.preventDefault();
    let usuario = {}
    usuario.nombre = document.getElementById("usuario").value;
    usuario.clave = document.getElementById("contraseña").value;

    if(verificarUsuario(usuario, usuariosArray)){
        local.guardar("UsuarioActual", usuario);

        console.log(verificarUsuario(usuario, usuariosArray));

        setTimeout(()=>{
            window.location='./index.html';   /* Esta funcion redirecciona a la pagina principal una vez que el nombre y la clave son validos  */
        },900);

    }else{
        console.log(verificarUsuario(usuario, usuariosArray));
        let error = document.createElement("h3");
        error.innerHTML = "¡Usuario o contraseña incorrecta!";
    }
};
