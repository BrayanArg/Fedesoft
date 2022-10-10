

function cargarModal(){
    document.getElementById("boton-modal").click();   
    
}

function registrar(){
    let form = document.getElementById("container-registro");
    form.style.display = "block";
    
}

document.getElementById("formulario").addEventListener("submit", crear);


function crear(e){
    // debugger;
    
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApe").value;
    let tel = document.getElementById("inputTel").value;
    let fecha = document.getElementById("inputFecha").value;
    let email = document.getElementById("inputEmail").value;
    let pass = document.getElementById("inputPass").value;

    let user =  {
        nombre, apellido, tel, fecha, email, pass
    }
  
   if(localStorage.getItem("usuarios") === null){
        let users = [];
        users.push(user);
        localStorage.setItem("usuarios", JSON.stringify(users));
    } else{
        let users = JSON.parse(localStorage.getItem("usuarios"));
        let elementIndex = users.findIndex((obj)=>obj.email == email);
        if(elementIndex == -1){
            users.push(user);
            localStorage.setItem("usuarios", JSON.stringify(users));
            document.getElementById("pageInicio").click();
            document.getElementById("formulario").reset();
        }else{
            alert("Usuario existente, por favor digite otro correo.");
            
        }
      
    }
    
    
    
    e.preventDefault();
    
    console.log("Usuarios creado Correctamente")
}


function login(){
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let users = JSON.parse(localStorage.getItem("usuarios"));
    let elementIndex = users.findIndex((obj)=>obj.email == email);
    let elementIndexP = users.findIndex((obj)=>obj.pass == pass);
    console.log(elementIndex);

    if(elementIndex != -1 && pass != ""){

        if(pass == users[elementIndex].pass){
            document.getElementById("pageInicio").click();
        }else{
            alert("Usuario o contraseña incorrectos!");
        }
    }else{
        alert("Usuario o contraseña incorrectos!");
        
    }
}

