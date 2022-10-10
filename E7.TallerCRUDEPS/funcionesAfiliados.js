
      $(document).ready(async function () {
        await leer();
        $("#tabla-afiliados").DataTable();
      });
    

document.getElementById("formulario").addEventListener("submit", crear);
let numActualizar ;

function crear(e) {
  let id = document.getElementById("inputId").value;
  let num = document.getElementById("inputNum").value;
  let nombre = document.getElementById("inputNombre").value;
  let fecha = document.getElementById("inputFecha").value;
  let esp = document.getElementById("inputEsp").value;

  let paciente = {
    id,
    num,
    nombre,
    fecha,
    esp,
  };

  if (localStorage.getItem("afiliados") === null) {
    let pacientes = [];
    pacientes.push(paciente);
    localStorage.setItem("afiliados", JSON.stringify(pacientes));
  } else {
    let pacientes = JSON.parse(localStorage.getItem("afiliados"));
    let elementIndex = pacientes.findIndex((obj) => obj.num == num);
    if (elementIndex == -1) {
      pacientes.push(paciente);
      localStorage.setItem("afiliados", JSON.stringify(pacientes));
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

  console.log("Afiliado Guardado Correctamente");
}

function leer() {
  let pacientes = JSON.parse(localStorage.getItem("afiliados"));
  //   console.log(pacientes);
  if (pacientes != null) {
    document.getElementById("tabla-tbody").innerHTML = "";
    for (let i = 0; i < pacientes.length; i++) {
      let id = pacientes[i].id;
      let num = pacientes[i].num;
      let nombre = pacientes[i].nombre;
      let fecha = pacientes[i].fecha;
      let esp = pacientes[i].esp;

      document.getElementById("tabla-tbody").innerHTML += `<tr>
          <td>${id}</td>
          <td>${num}</td>
          <td>${nombre}</td>
          <td>${fecha}</td>
          <td>${esp}</td>
          <td><button class="btn btn-success" onclick="editar('${num}')" data-bs-toggle="modal"
          data-bs-target="#modalEdit">Editar</button></td>
          <td><button class="btn btn-danger" onclick="eliminar('${num}')">Eliminar</button></td>
          `;
    }
  }
}
leer();

function editar(num){
    let pacientes = JSON.parse(localStorage.getItem("afiliados"));
    let elementIndex = pacientes.findIndex((obj) => obj.num == num);
    
    document.getElementById("inputIdA").value= pacientes[elementIndex].id;
    document.getElementById("inputNumA").value= pacientes[elementIndex].num;
    document.getElementById("inputNombreA").value= pacientes[elementIndex].nombre;
    document.getElementById("inputFechaA").value= pacientes[elementIndex].fecha;
    document.getElementById("inputEspA").value= pacientes[elementIndex].esp;
    numActualizar = num;
}

function actualizar(){
    // debugger
    let pacientes = JSON.parse(localStorage.getItem("afiliados"));
    let elementIndex = pacientes.findIndex((obj) => obj.num == numActualizar);
    // console.log(elementIndex);
    
    pacientes[elementIndex].nombre = document.getElementById("inputNombreA").value;
    pacientes[elementIndex].fecha = document.getElementById("inputFechaA").value;
    pacientes[elementIndex].esp = document.getElementById("inputEspA").value;
    localStorage.setItem("afiliados", JSON.stringify(pacientes));
    alert("Usuario actualizado exitosamente!");
    leer();
}

function eliminar(){
    let pacientes = JSON.parse(localStorage.getItem("afiliados"));
    let elementIndex = pacientes.findIndex((obj) => obj.num == numActualizar);

    pacientes.splice(elementIndex, 1);
    localStorage.setItem("afiliados", JSON.stringify(pacientes));
    leer();
    alert("Registro eliminado correctamente!");
}