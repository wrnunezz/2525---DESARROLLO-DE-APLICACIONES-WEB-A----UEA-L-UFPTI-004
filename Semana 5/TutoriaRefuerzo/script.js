function cambiarTexto(){
        document.getElementById("texto").innerHTML = "Nuevo texto";
       }

function cambiaColor(){
    document.getElementById("texto").style.color = "red";
}

function validarNumero(){
    var numero = document.getElementById("nume").value;
    var mensaje = document.getElementById("mensaje");
    if (isNaN(numero)) {
        mensaje.innerHTML = "Debes ingresar un número";
        mensaje.style.color="red";
        } else {
            mensaje.innerHTML = "es un número";
            mensaje.style.color="green";
        }
}