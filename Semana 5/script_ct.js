        function cambiarTexto(){
            document.getElementById("texto").innerHTML = "Nuevo texto";
        }

        function cambiaColor(){
            document.getElementById("texto").style.color = "red";

        }
        function cambiaFondo(){
            document.getElementById("texto").style.background = "blue";
        }

        function validarNumeros(){
            var numero = document.getElementById("num1").value;
            var mensaje = document.getElementById("mensaje");
            if (isNaN(numero)) {
                mensaje.innerHTML = "Debes ingresar un número";
                mensaje.style.color="red";
                } else {
                    mensaje.innerHTML = "El número es válido";  
                    mensaje.style.color="green";

        }}