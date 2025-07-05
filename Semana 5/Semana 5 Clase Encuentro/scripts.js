function cambiarTexto(){
            document.getElementById("texto").innerHTML = "Nuevo texto";
        }
function carmbiarColor(){
            document.getElementById("texto").style.color = "red";
        }
function cambiarFondo(){
    document.getElementById("texto").style.background = "blue";
    }

function validarnumeros(){
    var numero = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje");
    if (isNaN(numero)) {
        mensaje.innerHTML = "No es un número";
        mensaje.style.color="Red";
        } else {
            mensaje.innerHTML = "Validado";
            mensaje.style.color="Green"
            }
}