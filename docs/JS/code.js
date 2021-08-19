$("#formulario_teclado").click(() => {  /* Esto despliega el formulario de teclados una vez apretado el boton de SI QUIERO! */
  $("#form").slideDown("slow");
});


function tomardatos (evento){
    evento.preventDefault();
    let precio = $("#precio").val();
    let uso = $("#uso").val();            /*  Aca se toman los valores elegidos de precio, uso y color  */
    let color = $("#color").val();
    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
          $("#listaxprecio").empty()      /* Esto hace que una vez desplegado los teclados, si se quiere hacer una nueva busqueda, limpie la busqueda anterior */
          let teclados = respuesta;
          var filtro = teclados.filter(function (teclado){return teclado.precio <= precio && teclado.color == color && teclado.uso == uso});  /* Esta funcion filtra los teclados segun su precio, color y uso */
          filtro.forEach( teclado => {  /* Una vez que el filtro se hizo, se imprimen en el HTML los teclados */
            $("#listaxprecio").append(`
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="card-body">
                <div class="imagen">
                  <img class="imagen__img" src=${teclado.Image}>
                  <div class="imagen__overlay imagen__overlay--primary">
                    <div class="imagen__title">${teclado.nombre}</div>
                    <p class="imagen__description">
                      ${teclado.Tipo}
                      <br>
                      $${teclado.precio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            `)
                              .hide().slideDown() /* despliega los teclados una vez completado el formulario*/
        })
    }
    }
    );;
}





const URLJSON = "JS/teclados.json"



$(".contacto_boton").click(function(){ /* Al apretar el boton de enviar en el formulario de contacto, se limpia el formulario */
  $(".input, .area").val("");
});