const listC = [
  {
    id: 1,
    nombre: "Maria José",
    apellido: "Gonzales",
    tel: "3186778990",
    email: "mariaj@gmail.com",
    ciudad: "Cali",
  },
  {
    id: 2,
    nombre: "Leidy",
    apellido: "Cruz",
    tel: "3196778990",
    email: "leidyc@gmail.com",
    ciudad: "Cali",
  },
  {
    id: 3,
    nombre: "Juliana",
    apellido: "Dominguez",
    tel: "3206778990",
    email: "julianad@gmail.com",
    ciudad: "Cali",
  },
];

const listV = [
  {
    id: 1,
    cliente: "Maria José Gonzales",
    fecha: "20/09/2022",
    producto: "portatil Lenovo",
    valorU: 2500000,
    cantidad: 1,
  },
  {
    id: 2,
    cliente: "Leidy Cruz",
    fecha: "2/09/2022",
    producto: "Monitor LG",
    valorU: 600000,
    cantidad: 2,
  },
  {
    id: 3,
    cliente: "Juliana Dominguez",
    fecha: "12/09/2022",
    producto: "Celular samsung",
    valorU: 1200000,
    cantidad: 1,
  },
];

function crearListClientes() {
  let ubi = document.getElementsByTagName("td").length;
  if (ubi > 0) {
    let remove = (document.getElementById("listClientes").innerHTML = "");
  }

  let idList = document.getElementById("listClientes");
  listC.forEach(function (data, index) {
    let linetr = document.createElement("tr");
    let linetd1 = document.createElement("td");
    let linetd2 = document.createElement("td");
    let linetd3 = document.createElement("td");
    let linetd4 = document.createElement("td");
    let linetd5 = document.createElement("td");
    let linetd6 = document.createElement("td");

    idList.appendChild(linetr);
    linetr.appendChild(linetd1);
    let id = document.createTextNode(data.id);
    linetd1.appendChild(id);

    linetr.appendChild(linetd2);
    let nombre = document.createTextNode(data.nombre);
    linetd2.appendChild(nombre);

    linetr.appendChild(linetd3);
    let apellido = document.createTextNode(data.apellido);
    linetd3.appendChild(apellido);

    linetr.appendChild(linetd4);
    let telefono = document.createTextNode(data.tel);
    linetd4.appendChild(telefono);

    linetr.appendChild(linetd5);
    let email = document.createTextNode(data.email);
    linetd5.appendChild(email);

    linetr.appendChild(linetd6);
    let ciudad = document.createTextNode(data.ciudad);
    linetd6.appendChild(ciudad);
  });

  let mostrar = document.getElementById("contenedorList");
  mostrar.style.display = "block";
}

function crearListVentas() {
  let ubi = document.getElementsByTagName("td").length;
  if (ubi > 0) {
    let remove = (document.getElementById("listVentas").innerHTML = "");
  }

  let idList = document.getElementById("listVentas");
  listV.forEach(function (data, index) {
    let linetr = document.createElement("tr");
    let linetd1 = document.createElement("td");
    let linetd2 = document.createElement("td");
    let linetd3 = document.createElement("td");
    let linetd4 = document.createElement("td");
    let linetd5 = document.createElement("td");
    let linetd6 = document.createElement("td");
    let linetd7 = document.createElement("td");
    let linetd8 = document.createElement("td");

    idList.appendChild(linetr);
    linetr.appendChild(linetd1);
    let id = document.createTextNode(data.id);
    linetd1.appendChild(id);

    linetr.appendChild(linetd2);
    let cliente = document.createTextNode(data.cliente);
    linetd2.appendChild(cliente);

    linetr.appendChild(linetd3);
    let fecha = document.createTextNode(data.fecha);
    linetd3.appendChild(fecha);

    linetr.appendChild(linetd4);
    let producto = document.createTextNode(data.producto);
    linetd4.appendChild(producto);

    linetr.appendChild(linetd5);
    let valorU = document.createTextNode(data.valorU);
    linetd5.appendChild(valorU);

    linetr.appendChild(linetd6);
    let cantidad = document.createTextNode(data.cantidad);
    linetd6.appendChild(cantidad);

    linetr.appendChild(linetd7);
    let valorUNum = data.valorU;
    let cantidadNum = data.cantidad;
    let subtotal = valorUNum * cantidadNum;
    let subtotalText = document.createTextNode(subtotal);
    linetd7.appendChild(subtotalText);

    linetr.appendChild(linetd8);
    let netoIva = +subtotal + subtotal * 0.19;
    let netoText = document.createTextNode(netoIva);
    linetd8.appendChild(netoText);

    data.neto = netoIva;
  });

  let mostrar = document.getElementById("contenedorList");
  mostrar.style.display = "block";
}

function limpiarC() {
  let id = (document.getElementById("inputID").value = "");
  let nombre = (document.getElementById("inputNombre").value = "");
  let apellido = (document.getElementById("inputApellidos").value = "");
  let telefono = (document.getElementById("inputTel").value = "");
  let email = (document.getElementById("inputEmail").value = "");
  let ciudad = (document.getElementById("inputCiudad").value = "");
}

function limpiarV() {
  let id = (document.getElementById("inputID").value = "");
  let cliente = (document.getElementById("inputCliente").value = "");
  let fecha = (document.getElementById("inputFecha").value = "");
  let producto = (document.getElementById("inputProducto").value = "");
  let valorU = (document.getElementById("inputValorU").value = "");
  let cantidad = (document.getElementById("inputCantidad").value = "");
}

function crearC() {
  let id = document.getElementById("inputID").value;
  let nombre = document.getElementById("inputNombre").value;
  let apellido = document.getElementById("inputApellidos").value;
  let telefono = document.getElementById("inputTel").value;
  let email = document.getElementById("inputEmail").value;
  let ciudad = document.getElementById("inputCiudad").value;

  let elementIndex = listC.findIndex((obj) => obj.id == id);

  if (elementIndex == -1) {
    if (id != 0) {
      listC.push({
        id: id,
        nombre: nombre,
        apellido: apellido,
        tel: telefono,
        email: email,
        ciudad: ciudad,
      });
      alert("Nuevo registro creado!");
      // console.log(listC);
    } else {
      alert("ID no valido!");
    }
  } else {
    alert("El ID ingresado ya existe en el sistema!");
  }
  limpiarC();
}

function crearV() {
  let id = document.getElementById("inputID").value;
  let cliente = document.getElementById("inputCliente").value;
  let fecha = document.getElementById("inputFecha").value;
  let producto = document.getElementById("inputProducto").value;
  let valorU = document.getElementById("inputValorU").value;
  let cantidad = document.getElementById("inputCantidad").value;

  let elementIndex = listV.findIndex((obj) => obj.id == id);

  if (elementIndex == -1) {
    if (id != 0) {
      listV.push({
        id: id,
        cliente: cliente,
        fecha: fecha,
        producto: producto,
        valorU: valorU,
        cantidad: cantidad,
      });
      alert("Nuevo registro creado!");
      // console.log(listC);
    } else {
      alert("ID no valido!");
    }
  } else {
    alert("El ID ingresado ya existe en el sistema!");
  }
  limpiarV();
}

function buscarC() {
  let id = document.getElementById("inputID").value;
  let nombre = document.getElementById("inputNombre");
  let apellido = document.getElementById("inputApellidos");
  let telefono = document.getElementById("inputTel");
  let email = document.getElementById("inputEmail");
  let ciudad = document.getElementById("inputCiudad");
  let validar = 0;
  for (let index in listC) {
    if (id == listC[index].id) {
      validar = 1;
      nombre.value = listC[index].nombre;
      apellido.value = listC[index].apellido;
      telefono.value = listC[index].tel;
      email.value = listC[index].email;
      ciudad.value = listC[index].ciudad;
    }
  }

  if (validar == 0) {
    alert("No se encontró el ID");
    limpiarC();
  }
}

function buscarV() {
  let id = document.getElementById("inputID").value;
  let cliente = document.getElementById("inputCliente");
  let fecha = document.getElementById("inputFecha");
  let producto = document.getElementById("inputProducto");
  let valorU = document.getElementById("inputValorU");
  let cantidad = document.getElementById("inputCantidad");
  let validar = 0;
  for (let index in listV) {
    if (id == listV[index].id) {
      validar = 1;
      cliente.value = listV[index].cliente;
      fecha.value = listV[index].fecha;
      producto.value = listV[index].producto;
      valorU.value = listV[index].valorU;
      cantidad.value = listV[index].cantidad;
    }
  }

  if (validar == 0) {
    alert("No se encontró el ID");
    limpiarV();
  }
}

function editarC() {
  let id = document.getElementById("inputID").value;
  if (id == "") {
    alert("Por favor ingresar ID!");
  } else {
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellidos").value;
    let telefono = document.getElementById("inputTel").value;
    let email = document.getElementById("inputEmail").value;
    let ciudad = document.getElementById("inputCiudad").value;

    let elementIndex = listC.findIndex((obj) => obj.id == id);
    // console.log(elementIndex);

    if (elementIndex != -1) {
      listC[elementIndex].nombre = nombre;
      listC[elementIndex].apellido = apellido;
      listC[elementIndex].tel = telefono;
      listC[elementIndex].email = email;
      listC[elementIndex].ciudad = ciudad;
      alert("Usuario actualizado!");
    } else {
      alert("El ID ingresado no existe!");
    }
  }
}

function editarV() {
  let id = document.getElementById("inputID").value;
  if (id == "") {
    alert("Por favor ingresar ID!");
  } else {
    let cliente = document.getElementById("inputCliente").value;
    let fecha = document.getElementById("inputFecha").value;
    let producto = document.getElementById("inputProducto").value;
    let valorU = document.getElementById("inputValorU").value;
    let cantidad = document.getElementById("inputCantidad").value;

    let elementIndex = listV.findIndex((obj) => obj.id == id);
    // console.log(elementIndex);

    if (elementIndex != -1) {
      listV[elementIndex].cliente = cliente;
      listV[elementIndex].fecha = fecha;
      listV[elementIndex].producto = producto;
      listV[elementIndex].valorU = valorU;
      listV[elementIndex].cantidad = cantidad;
      alert("Usuario actualizado!");
    } else {
      alert("El ID ingresado no existe!");
    }
  }
}

function eliminarC() {
  let id = document.getElementById("inputID").value;
  let nombre = document.getElementById("inputNombre").value;
  let apellido = document.getElementById("inputApellidos").value;
  let telefono = document.getElementById("inputTel").value;
  let email = document.getElementById("inputEmail").value;
  let ciudad = document.getElementById("inputCiudad").value;
  let validar = 0;
  if (id != "") {
    for (let index in listC) {
      if (id == listC[index].id) {
        validar = 1;
        listC.splice(index, 1);
        alert("Registro eliminado exitosamente!");
        break;
      }
    }
    if (validar == 0) {
      alert("No se encontró el ID");
    }
  } else {
    alert("Por favor ingresar ID!");
  }

  limpiarC();
}

function eliminarV() {
  let id = document.getElementById("inputID").value;
  let cliente = document.getElementById("inputCliente").value;
  let fecha = document.getElementById("inputFecha").value;
  let producto = document.getElementById("inputProducto").value;
  let valorU = document.getElementById("inputValorU").value;
  let cantidad = document.getElementById("inputCantidad").value;
  let validar = 0;
  if (id != "") {
    for (let index in listV) {
      if (id == listV[index].id) {
        validar = 1;
        listV.splice(index, 1);
        alert("Registro eliminado exitosamente!");
        break;
      }
    }
    if (validar == 0) {
      alert("No se encontró el ID");
    }
  } else {
    alert("Por favor ingresar ID!");
  }

  limpiarV();
}

function calcV(){
  let total = 0;
  for (let index in listV){
    total+= listV[index].neto;
  }
  alert("Total de ventas: "+total);
}