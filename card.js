const elementosCocina = [
    {
      id: 1,
      nombre: "Sartén Antiadherente",
      precio: 25.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s",
      contador: 0
    },
    {
      id: 2,
      nombre: "Cuchillo Chef",
      precio: 18.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s",
      contador: 0
    },
    {
      id: 3,
      nombre: "Tabla de Cortar",
      precio: 12.75,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s",
      contador: 0
    },
    {
      id: 4,
      nombre: "Olla de Acero inx",
      precio: 35.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s",
      contador: 0
    },
    {
      id: 5,
      nombre: "Batidora de Mano",
      precio: 29.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s",
      contador: 0
    },
    {
      id: 6,
      nombre: "Tetera Eléctrica",
      precio: 22.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s",
      contador: 0
    }
  ];
  
let productos = document.getElementById("productos")

for (let index = 0; index < elementosCocina.length; index++) {
    const element = elementosCocina[index];

    productos.innerHTML += `                        
    <div class="card tarjeta col-3" style="width: 16rem;">
            <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text"></p>
                <div class="d-flex justify-content-center py-0">
                    <p class=" btn btn-primary py-0 mt-4">$ ${element.precio}</p>
                </div>
                <div class="d-flex justify-content-center ">
                    <i type="button" class=" boton- fa-solid fa-arrow-left me-2"></i>
                    <p class="fw-bold fs-3 cantidad mb-0">0</p>
                    <i type="button" class=" boton fa-solid fa-arrow-right ms-2"></i>
                </div>
            </div>
        </div>` 
    
}


// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorrlo" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "tota a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"



let totalProductos = document.getElementsByClassName ("boton")
let cantidadTotal = document.getElementById ("cantidadTotal")
let preciosArray = []
let Subtotal = document.getElementById ("subtotal")
let sumaProductos = 0
let ahorro = document.getElementById ('ahorroTotal')
let cantidades = document. getElementsByClassName ('cantidad')
let ahorroTotaltotal = 0
let granTotaltotal = document.getElementById ("granTotal")

for (let index = 0; index < totalProductos.length; index++) {
  const boton = totalProductos[index];
  
  boton.addEventListener ("click", (evento)=>{
    const precio = elementosCocina [index].precio
    preciosArray.push(precio)
    cantidadTotal.innerText = preciosArray.length
    sumaProductos += precio
    Subtotal.innerText = sumaProductos
    if (preciosArray.length > 5 ) {
      ahorroTotaltotal = 5 
      ahorro.innerText = ahorroTotaltotal
    }
    granTotaltotal.innerText = sumaProductos - ahorroTotaltotal

    elementosCocina [index].contador ++ 
    cantidades [index].innerText = elementosCocina [index].contador
  })
  
}