 export function validar(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostraMensajeDeError(tipoDeInput, input)
    }
}

const  tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
    "customError",
]


const mensajeDeError ={
    nombre: {
        valueMissing:"este campo no puede estar vacio"
    },
    email:{
        valueMissing:"Este campo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres, maximo 12, debe contener 1 letra minuscula, 1 mayuscula, un numero y no acepta caracteres especiales"
    },
    nacimiento: {
        valueMissing:"Este campo no puede estar vacio",
        customError:"debes tener al menos 18 años"
    },
    numero: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es 10 numeros"
    },
    dirección: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "La dirección de contener entre 10 a 40 caracteres."
    },
    ciudad: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "La ciudad de contener entre 10 a 40 caracteres."
    },
    estado: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "El estado de contener entre 10 a 40 caracteres."
    },
    

};

const validadores = {
    nacimiento: (input) =>  validarNacimiento(input)
};

function mostraMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][Error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje
}



function validarNacimiento() {
    const fechaCliente = new Date(imput.value);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
    imput.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFecha =  new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return(diferenciaFecha <= fechaActual);

}