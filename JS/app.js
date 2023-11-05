const btnLogin = document.querySelector('.btnLogin');

btnLogin.addEventListener('click', () => {
    //Mandar a otra pagina
    window.location.href = '/html/menu.html';
});

const btnClientes = document.getElementById('btnClientes');
const btnEmpleados = document.getElementById('btnEmpleados');
const btnVentas = document.getElementById('btnVentas');
const btnProductos = document.getElementById('btnProductos');

const clientesInfo = document.getElementById('clientes');
const empleadosInfo = document.getElementById('empleados');
const ventasInfo = document.getElementById('ventas');
const productosInfo = document.getElementById('productos');

btnClientes.addEventListener('click', () => {
    clientesInfo.style.visibility = 'visibility';
    empleadosInfo.style.visibility = 'hidden';
    ventasInfo.style.visibility = 'hidden';
    productosInfo.style.visibility = 'hidden';
  });
  
  btnEmpleados.addEventListener('click', () => {
    clientesInfo.style.visibility = 'hidden';
    empleadosInfo.style.visibility = 'visibility';
    ventasInfo.style.visibility = 'hidden';
    productosInfo.style.visibility = 'hidden';
  });
  
  btnVentas.addEventListener('click', () => {
    clientesInfo.style.visibility = 'hidden';
    empleadosInfo.style.visibility = 'hidden';
    ventasInfo.style.visibility = 'visibility';
    productosInfo.style.visibility = 'hidden';
  });
  
  btnProductos.addEventListener('click', () => {
    clientesInfo.style.visibility = 'hidden';
    empleadosInfo.style.visibility = 'hidden';
    ventasInfo.style.visibility = 'hidden';
    productosInfo.style.visibility = 'visibility';
  });