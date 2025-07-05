const nombre = document.getElementById("nombre");
const correo =document.getElementById("email");

const formulario = document.getElementById("formulario");

function validarFormulario(){
    const nombreValido=nombre.value.length>=3;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);


    document.getElementById("errorNombre").textContent= nombreValido ? "" : "El nombre debe tener al menos 3 caracteres";
    document.getElementById("errorEmail").textContent= correoValido ? "" : "El correo no es válido";
    return nombreValido && correoValido;

}

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if(validarFormulario()){
        alert("Formulario enviado con éxito");
    }
});