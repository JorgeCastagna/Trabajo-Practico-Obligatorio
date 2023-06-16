
fetch('https://sheetdb.io/api/v1/v8sid17znpqza')
  .then(response => response.json()) // Parsear la respuesta como JSON
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos de la API
    console.log(data); // Verifica que los datos se estén obteniendo correctamente

    // Crear instancias de la clase Product y mostrar los datos en el HTML
    var productObjeto = data.map(
      (producto) => new Product(producto.articulo, producto.precio, producto.img),
    );

    productObjeto.forEach((art) => art.getDivCardProduct("grid-container"));
  })
  .catch(error => {
    // Manejo de errores en caso de que la petición falle
    console.error('Error:', error);
  });

class Product {
  constructor(articulo, precio, img) {
    this.articulo = articulo;
    this.precio = precio;
    this.img = img;
  }

  getDivCardProduct(idToInsert) {
    let parent = document.getElementById(idToInsert);
    let div = document.createElement("div");
    div.innerHTML = `
      <center>
        <h4>${this.articulo}</h4>
        <div>
          <img src="/prgfullpython/${this.img}" alt="${this.name}" />
          <h5>${this.precio}</h5>
        </div>
      </center>`;
    parent.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // El código dentro de esta función se ejecutará cuando se cargue el DOM
});