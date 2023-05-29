// const URI_ENDPOINT = "https://sheetdb.io/api/v1/v8sid17znpqza";

// fetch(URI_ENDPOINT)
//     .then((datos) => datos.json())
//     .then((data) => console.log(data));

import productos from "/feria/assets/db/productos.json" assert {type : "json"};

// console.log(productos);

class Product {
    constructor(articulo, precio, img) {
        (this.articulo = articulo), (this.precio = precio), (this.img = img);
    }
    getDivCardProduct(idToInsert) {
        /*selecciona el elementro padre*/
        let parent = document.getElementById(idToInsert);
        /*crea un elemento a indexar o inyectar*/
        let div = document.createElement("div");
        /*le agreo lo que inyecto*/
        div.innerHTML = `
        <center>
            <h4>${this.articulo}</h4>
            <div>
                <img src="${this.img}" alt="${this.name}" />
                <h5> ${this.precio} </h5>
            </div>
        </center>`;    
        /* agrego elemento hijo  al padre*/
        parent.appendChild(div);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    
    var productObjeto = productos.map(
        (producto) => new Product(producto.articulo, producto.precio, producto.img),
    );

    productos.forEach((producto) => console.log(`${producto.articulo}`));

    productObjeto.forEach((art) => art.getDivCardProduct("grid-container"));
    });



// var tienda = "`";

// for (let art of productos){
    
//     tienda += '<div class="grid-item"><img src= "${art.img}" alt="${art.articulo}"><br>"${art.articulo}"<br>"${art.precio}"</div>'
// }
// tienda += "`"

// console.log(tienda)
// document.getElementById("grid-container").innerHTML = tienda;