 //Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
 
 let contactList= [ "Ricardo Arcos", "Cristian ruis", "sofia rivera"];


 // Crea una función para añadir un nuevo contacto a una lista.

 const addContact = function(newContact){
    const contact= contactList.push(newContact);
    return contact;
  }

  // Crea una función para borrar un contacto existente de la lista
  const deleteContact = (newContact) => {
  const personDelete = contactList.indexOf(newContact); 
  if (personDelete !==-1){
    contactList.splice(personDelete,1)
    console.log("Contacto borrado con éxito");
  }else{
    console.log("El contacto no existe en la lista");
  }
  }
  
  // Otra forma de realizarlo 

  // function deleteContact(newContact) {
  //   const personDelete = contactList.indexOf(newContact);
  //   if (personDelete !== -1) {
  //     contactList.splice(personDelete, 1);
  //     console.log("Contacto borrado con éxito");
  //   } else {
  //     console.log("El contacto no existe en la lista");
  //   }
  // }
  
// Crea una función para imprimir en consola los contactos presentes en la lista

// forma 1- imprimir

// function imprimeContacto(){
//   contactList.forEach(function(newContact){
//     console.log(newContact);
// });
// }

// forma 2- for
// function imprimeContacto(){
//   for(let i=0; i<contactList.length; i++){
//   console.log(contactList[i]);
//   }
// }

// forma 3- join imprimir en una sola linea, es necesario el join

  function imprimeContacto(){
    console.log(contactList.join(", "));
  }

  // prueba 
  console.log("Lista inicial de contactos: ")
  imprimeContacto();
  console.log("agregar contacto: ")
  addContact("David Paez");
  imprimeContacto();
  console.log("eliminar contacto: ")
  deleteContact('Cristian ruis');
  imprimeContacto();

  