import { validar } from "./validacionEdad";

const inputs = document.querySelector("input");

inputs.forEach( input =>{
    input.addEventListener("blur", (input) =>{
        validar(input.target)
    })
});