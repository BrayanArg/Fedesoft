$(document).ready(function () {
    $("#tabla-independientes").DataTable();
  });

  document.getElementById("formulario").addEventListener("submit", crear);
let numActualizar ;

function crear(e) {
    // debugger
  let id = document.getElementById("inputId").value;
  let num = document.getElementById("inputNum").value;
  let nombre = document.getElementById("inputNombre").value;
  let ciudad = document.getElementById("inputCiudad").value;
  let dir = document.getElementById("inputDir").value;
  let email = document.getElementById("inputEmail").value;
  let barrio = document.getElementById("inputBarrio").value;
  let sede = document.getElementById("inputSede").value;

  let persona = {
    id,
    num,
    nombre,
    ciudad,
    dir,
    email,
    barrio,
    sede
  };

  if (localStorage.getItem("independientes") === null) {
    let personas = [];
    personas.push(persona);
    localStorage.setItem("independientes", JSON.stringify(personas));
  } else {
    let personas = JSON.parse(localStorage.getItem("independientes"));
    let elementIndex = personas.findIndex((obj) => obj.num == num);
    if (elementIndex == -1) {
      personas.push(persona);
      localStorage.setItem("independientes", JSON.stringify(personas));
      let toastLiveExample = document.getElementById("liveToast");
      var toast = new bootstrap.Toast(toastLiveExample);    
      toast.show();
    } else {
      alert(
        "Usuario existente, por favor digite otro número de identificación."
      );
    }
  }

  leer();
  document.getElementById("formulario").reset();
  e.preventDefault();

  console.log("Independiente guardado Correctamente");
}

function leer() {
  let personas = JSON.parse(localStorage.getItem("independientes"));
  
  if (personas != null) {
    document.getElementById("tabla-tbody").innerHTML = "";
    for (let i = 0; i < personas.length; i++) {
      let id = personas[i].id;
      let num = personas[i].num;
      let nombre = personas[i].nombre;
      let ciudad = personas[i].ciudad;
      let dir = personas[i].dir;
      let email = personas[i].email;
      let barrio = personas[i].barrio;
      let sede = personas[i].sede;

      document.getElementById("tabla-tbody").innerHTML += `<tr>
          <td>${id}</td>
          <td>${num}</td>
          <td>${nombre}</td>
          <td>${ciudad}</td>
          <td>${dir}</td>
          <td>${email}</td>
          <td>${barrio}</td>
          <td>${sede}</td>
          <td><button class="btn btn-success" onclick="editar('${num}')" data-bs-toggle="modal"
          data-bs-target="#modalEdit">Editar</button></td>
          <td><button class="btn btn-danger" onclick="eliminar('${num}')">Eliminar</button></td>
          `;
    }
  }
}
leer();

function editar(num){
    // debugger
    let personas = JSON.parse(localStorage.getItem("independientes"));
    let elementIndex = personas.findIndex((obj) => obj.num == num);
    
    document.getElementById("inputIdA").value= personas[elementIndex].id;
    document.getElementById("inputNumA").value= personas[elementIndex].num;
    document.getElementById("inputNombreA").value= personas[elementIndex].nombre;
    document.getElementById("inputCiudadA").value= personas[elementIndex].ciudad;
    document.getElementById("inputDirA").value= personas[elementIndex].dir;
    document.getElementById("inputEmailA").value= personas[elementIndex].email;
    document.getElementById("inputBarrioA").value= personas[elementIndex].barrio;
    document.getElementById("inputSedeA").value= personas[elementIndex].sede;
    numActualizar = num;
}

function actualizar(){
    // debugger
    let personas = JSON.parse(localStorage.getItem("independientes"));
    let elementIndex = personas.findIndex((obj) => obj.num == numActualizar);
    // console.log(elementIndex);
    
    personas[elementIndex].nombre = document.getElementById("inputNombreA").value;
    personas[elementIndex].ciudad = document.getElementById("inputCiudadA").value;
    personas[elementIndex].dir = document.getElementById("inputDirA").value;
    personas[elementIndex].email = document.getElementById("inputEmailA").value;
    personas[elementIndex].barrio = document.getElementById("inputBarrioA").value;
    personas[elementIndex].sede = document.getElementById("inputSedeA").value;
    localStorage.setItem("independientes", JSON.stringify(personas));
    alert("Usuario actualizado exitosamente!");
    leer();
}

function eliminar(){
    let personas = JSON.parse(localStorage.getItem("independientes"));
    let elementIndex = personas.findIndex((obj) => obj.num == numActualizar);

    personas.splice(elementIndex, 1);
    localStorage.setItem("independientes", JSON.stringify(personas));
    leer();
    alert("Registro eliminado correctamente!");
}