const registro = document.getElementById('registro');
const login = document.getElementById('login');
const btnRegistro = document.getElementById('btnRegistro');

btnRegistro.addEventListener('click', () => {
  registro.style.display = 'block';
  login.style.display = 'none';
});

const aceptarRegistro = document.getElementById('aceptarRegistro');

aceptarRegistro.addEventListener('click', () => {
  //Logica para la consulta de guardar informcion en la base de datos


  registro.style.visibility = 'hidden';
  login.style.visibility = 'visible';
});