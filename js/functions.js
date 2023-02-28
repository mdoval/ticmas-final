const misDatos = 
[
    {propiedad: 'nombre', titulo: 'Mi nombre es', descripcion: 'Martin Doval'},
    {propiedad: 'email', titulo: 'Mi direccion de Correo es', descripcion: 'martindoval@testing.com'},
    {propiedad: 'telefono', titulo: 'Mi Telefono es ', descripcion: '(3764) - 7272727'},
    {propiedad: 'direccion', titulo: 'Mi direccion es ', descripcion: 'Hungria 11231 - Posadas - Misiones'},
]

function buscarDato(propiedad) {
     let dato = misDatos.find( dato => dato.propiedad === propiedad)
     return dato 
}

function mostrarDatos(propiedad) {
    //alert('Funcion en ejecucion '+propiedad)
    let dato = buscarDato(propiedad)
    document.getElementById('titulo').innerHTML = dato.titulo
    document.getElementById('descripcion').innerHTML = dato.descripcion
    //console.log(buscarDato(propiedad))
}

function iniciarPagina() {
    //alert('Iniciando Pagina')
    buscarDatos();
    mostrarDatos('nombre')
}

function test() {
    alert("Testeando")
}

async function buscarDatos() {
    const response = await fetch('https://randomuser.me/api/?gender=male')
    const datos = await response.json()
    const resultados = datos.results[0]
    console.log(resultados.picture.thumbnail)
    document.getElementById("foto-perfil").src = resultados.picture.large 
}


const links = document.querySelectorAll(".page-header ul a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function enviarFormulario() {
  let nombre = document.getElementById("form-nombre").value
  let email = document.getElementById("form-email").value
  let consulta = document.getElementById("form-consulta").value
  alert('Aqui se enviaria un mail de ('+nombre+") con email ("+email+") con la siguiente consulta ("+consulta+")")
}