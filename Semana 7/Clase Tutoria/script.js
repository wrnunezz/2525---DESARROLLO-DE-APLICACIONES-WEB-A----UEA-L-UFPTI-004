let productos =[
{nombre: "Panes",Precio:0.50, Descripcion :"Panes deliciosos"},
{nombre: "Pasteles",Precio:3.50, Descripcion :"Pasteles"},
{nombre: "Leche",Precio:1.50, Descripcion :"Pasteles"}

];

const lista= document.getElementById("lista-productos");
const botonAgregar =document.getElementById("btnAgregar");

// función de renderizar 

function renderizar() {

    productos.forEach(productos =>{
        const item = document.createElement("li");
        item.textContent = `${productos.nombre} - Precio: $${productos.Precio} - ${productos.descripcion}`;
        lista.appendChild(item);
    });
}

botonAgregar.addEventListener("click",() =>{
    const nuevoPan= {
        nombre:"Nuevo Pan",
        Precio: 2.50,
        Descripcion: "Pan nuevo"
    };
    productos.push(nuevoPan);
    renderizar();

});




// función de agregar producto
window.onload=renderizar;