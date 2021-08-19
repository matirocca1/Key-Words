let local = {}
local.leer = (key,dato) => JSON.parse(localStorage.getItem(key)|| JSON.stringify(dato) );
local.guardar = (key,dato) => localStorage.setItem(key,JSON.stringify(dato));

/* Esto lo que hace es que en el LOCAL STORAGE guarde los datos puestos de iniciar sesion en BASEDEDATOS.JS */