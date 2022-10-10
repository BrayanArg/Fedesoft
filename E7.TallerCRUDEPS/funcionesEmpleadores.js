$(document).ready(function () {
    $("#tabla-empleadores").DataTable();
  });

  document.getElementById("formulario").addEventListener("submit", crear);
let numActualizar ;

function crear(e) {
  let id = document.getElementById("inputId").value;
  let num = document.getElementById("inputNum").value;
  let empresa = document.getElementById("inputEmpresa").value;
  let ciudad = document.getElementById("inputCiudad").value;
  let dir = document.getElementById("inputDir").value;
  let email = document.getElementById("inputEmail").value;
  let codP = document.getElementById("inputCodP").value;
  let reg = document.getElementById("inputReg").value;

  let entidad = {
    id,
    num,
    empresa,
    ciudad,
    dir,
    email,
    codP,
    reg
  };

  if (localStorage.getItem("empleadores") === null) {
    let entidades = [];
    entidades.push(entidad);
    localStorage.setItem("empleadores", JSON.stringify(entidades));
  } else {
    let entidades = JSON.parse(localStorage.getItem("empleadores"));
    let elementIndex = entidades.findIndex((obj) => obj.num == num);
    if (elementIndex == -1) {
      entidades.push(entidad);
      localStorage.setItem("empleadores", JSON.stringify(entidades));
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

  console.log("Empleador Guardado Correctamente");
}

function leer() {
  let entidades = JSON.parse(localStorage.getItem("empleadores"));
  
  if (entidades != null) {
    document.getElementById("tabla-tbody").innerHTML = "";
    for (let i = 0; i < entidades.length; i++) {
      let id = entidades[i].id;
      let num = entidades[i].num;
      let empresa = entidades[i].empresa;
      let ciudad = entidades[i].ciudad;
      let dir = entidades[i].dir;
      let email = entidades[i].email;
      let codP = entidades[i].codP;
      let reg = entidades[i].reg;

      document.getElementById("tabla-tbody").innerHTML += `<tr>
          <td>${id}</td>
          <td>${num}</td>
          <td>${empresa}</td>
          <td>${ciudad}</td>
          <td>${dir}</td>
          <td>${email}</td>
          <td>${codP}</td>
          <td>${reg}</td>
          <td><button class="btn btn-success" onclick="editar('${num}')" data-bs-toggle="modal"
          data-bs-target="#modalEdit">Editar</button></td>
          <td><button class="btn btn-danger" onclick="eliminar('${num}')">Eliminar</button></td>
          `;
    }
  }
}
leer();

function editar(num){
    let entidades = JSON.parse(localStorage.getItem("empleadores"));
    let elementIndex = entidades.findIndex((obj) => obj.num == num);
    
    document.getElementById("inputIdA").value= entidades[elementIndex].id;
    document.getElementById("inputNumA").value= entidades[elementIndex].num;
    document.getElementById("inputEmpresaA").value= entidades[elementIndex].empresa;
    document.getElementById("inputCiudadA").value= entidades[elementIndex].ciudad;
    document.getElementById("inputDirA").value= entidades[elementIndex].dir;
    document.getElementById("inputEmailA").value= entidades[elementIndex].email;
    document.getElementById("inputCodPA").value= entidades[elementIndex].codP;
    document.getElementById("inputRegA").value= entidades[elementIndex].reg;
    numActualizar = num;
}

function actualizar(){
    // debugger
    let entidades = JSON.parse(localStorage.getItem("empleadores"));
    let elementIndex = entidades.findIndex((obj) => obj.num == numActualizar);
    // console.log(elementIndex);
    
    entidades[elementIndex].empresa = document.getElementById("inputEmpresaA").value;
    entidades[elementIndex].ciudad = document.getElementById("inputCiudadA").value;
    entidades[elementIndex].dir = document.getElementById("inputDirA").value;
    entidades[elementIndex].email = document.getElementById("inputEmailA").value;
    entidades[elementIndex].codP = document.getElementById("inputCodPA").value;
    entidades[elementIndex].reg = document.getElementById("inputRegA").value;
    localStorage.setItem("empleadores", JSON.stringify(entidades));
    alert("Usuario actualizado exitosamente!");
    leer();
}

function eliminar(){
    let entidades = JSON.parse(localStorage.getItem("empleadores"));
    let elementIndex = entidades.findIndex((obj) => obj.num == numActualizar);

    entidades.splice(elementIndex, 1);
    localStorage.setItem("empleadores", JSON.stringify(entidades));
    leer();
    alert("Registro eliminado correctamente!");
}