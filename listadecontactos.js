 //ajuste lista de contactos 
 
 let contactList = [
  {
    id: 1,
    nombres: "Ricardo",
    apellidos: "Arcos",
    telefono: "123456789",
    ubicaciones: [
      {
        ciudad: "Bogota",
        direccion: "calle 32-423"
      },
      {
        ciudad: "Ciudad 2",
        direccion: "calle 32-423"
      }
    ]
  },
  {
    id: 2,
    nombres: "Laura",
    apellidos: "Castillejo",
    telefono: "987654321",
    ubicaciones: [
      {
        ciudad: "Ciudad 3",
        direccion: "calle 32-423"
      }
    ]
  },
  {
    id: 3,
    nombres: "Luciana",
    apellidos: "Arcos",
    telefono: "567890123",
    ubicaciones: [
      {
        ciudad: "Ciudad 5",
        direccion: "Dirección 5"
      }
    ]
  }
];
console.log(contactList);

 // Crea una función para añadir un nuevo contacto a una lista.

 function agregar(nuevoContacto) {
  contactList.push(nuevoContacto);
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

// forma 3- join imprimir en una sola linea, es necesario el join

function imprimirContactos() {
  contactList.forEach(contacto => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombres: ${contacto.nombres}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log("Ubicaciones:");
    contacto.ubicaciones.forEach(ubicacion => {
      console.log(`- Ciudad: ${ubicacion.ciudad}`);
      console.log(`  Dirección: ${ubicacion.direccion}`);
    });
    console.log("---------------------------------------");
  });
}

  // prueba 
  agregar({
    id: 4,
    nombres: "Mary",
    apellidos: "Arroyo",
    telefono: "654321987",
    ubicaciones: [
      {
        ciudad: "Cartagena",
        direccion: "calle 26#73-34"
      }
    ]
  });
  
  agregar({
    id: 5,
    nombres: "Pablo",
    apellidos: "Perez",
    telefono: "012345678",
    ubicaciones: [
      {
        ciudad: "Bogota",
        direccion: "calle 163#08-29"
      }
    ]
  });
  
  borrarContacto(5);
  imprimirContactos();
  

  