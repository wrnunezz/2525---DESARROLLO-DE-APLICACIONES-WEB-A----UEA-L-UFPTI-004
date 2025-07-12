// lista de productos 
let productos =[
    {nombre:"Martillo",precio:5,descripcion:"Martillo funcional"},
    {nombre:"Desarmador",precio:5,descripcion:"Desarmador funcional"},
    {nombre:"Alicate",precio:5,descripcion:"Alicate funcional"}
];

// lo q necesito 

const lista = document.getElementById("lista-productos");
const botonAgregar =document.getElementById("btnAgregar");

// función de renderizar 



function renderizar(){

  
    productos.forEach(productos =>{
        const item = document.createElement("li");
        item.textContent =`${productos.nombre} - ${productos.precio} -${productos.descripcion}`;
        lista.appendChild(item);
    });
}

botonAgregar.addEventListener("click", () =>{
    const nuevoProducto= {
        nombre:"Nuevo producto ferr",
        precio:5,
        descripcion:"Probando nuevo producto"
    };
    productos.push(nuevoProducto);
    renderizar();
});

window.onload=renderizar;