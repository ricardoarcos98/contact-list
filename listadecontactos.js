//ajuste lista de contactos 
 
let contactList=[];

// Crea una función para añadir un nuevo contacto a una lista.

function addContact(nombres, apellidos, telefono, ciudad, direccion){
    let contact ={ id:new Date().getTime(),
                  nombres: nombres,
                  apellidos: apellidos,
                  telefono: telefono,
                  ubicacion:{ ciudad:ciudad,
                              direccion:direccion}
                 }
    contactList.push(contact); // se envia la información actualizada del contacto 
}

  
    // Crea una función para borrar un contacto existente de la lista
    function borrarContacto(id) {
      const index = contactList.findIndex(contacto => contacto.id === id);
      if (index !== -1) {
        contactList.splice(index, 1);
        console.log("Contacto borrado con éxito");
      } else {
        console.log("El contacto no existe en la lista");
      }
    }
  
// funcion para imprimir contacto.
  
function imprimirContacto(){
    console.log(contactList);
}

// prueba 

//addContact("Nicolas","Arcos",3128438532,"Bogota","calle 23.32-32");
//addContact("carmen","alonso",556461641,"cali","calle 45-54.23")
//addContact("Juan","Vela",645876,"Choco","calle 4# 31-22")
//imprimirContacto();
//borrarContacto(id);
//actualizarContacto(id,"nombres","pep")
  