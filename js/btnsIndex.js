//Redireccionando a las vistas de registros y pagina principal.

//Redireccionando a la pasgina de registro docente.
document.getElementById('registro_T').addEventListener('click',function () {
    document.location.href = "/public/Formularios/vista_RegistroDocente.html";
  });

  //Redireccionando a la vista de inicio de sesion
document.getElementById('inicio_S').addEventListener('click',function () {
    document.location.href = "/public/Formularios/vista_InicioSesion.html";
  });

  //Redireccionando a la pagina principal.
  document.getElementById('pag_ini').addEventListener('click',function () {
    document.location.href = "/index.html";
  });