//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let listaContactos = ["Ricardo Arcos", "Laura castillejo", "Luciana Arcos"];
console.log(listaContactos);
//Crea una función para añadir un nuevo contacto a una lista.
function agregar(nuevoContacto) {
  listaContactos.push(nuevoContacto);
  imprimirContactos();
}

console.log(listaContactos);
//Crea una función para borrar un contacto existente de la lista
function borrarContacto(nuevoContacto) {
  const personDelete = listaContactos.indexOf(nuevoContacto);
  if (personDelete !== -1) {
    listaContactos.splice(personDelete, 1);
    console.log("Contacto borrado con éxito");
  } else {
    console.log("El contacto no existe en la lista");
  }
}
console.log(listaContactos);
// Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto, indice) => {
    console.log(`${indice + 1}. ${contacto}`);
  });
}
// Imprimir contactos
imprimirContactos();
agregar("Mary Arroyo");
agregar("Pablo Perez");
imprimirContactos();
borrarContacto("Ricardo Arcos");
imprimirContactos();
