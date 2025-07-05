function validarNumero(){
var numero = document.getElementById("numero").value;
var mensaje = document.getElementById("mensaje");

if (isNaN(numero)) {
    mensaje.innerHTML = "Debes ingresar un número";
    mensaje.style.color="Red"
    } else {
        mensaje.innerHTML = "";
        mensaje.style.color="green";
        }

}