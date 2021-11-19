

//var objJson=[]; // Can be obtained from another source, such as your objJson variable

fetch("http://localhost:8080/productos/")
    .then(res => res.json())
    .then(function (data){
        let objetos=data
        data.forEach(producto => {
           objJson.push(producto)
        });
})
var objJson=[]; 
console.log(objJson);

var current_page = 1;
var records_per_page = 2;



function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector(".seccionRecomendaciones");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        console.log(objJson);
        listing_table.innerHTML += `
        <div class="cardProducto" >
                        <div class="cajaImgProducto">
                            <img src="${objJson[i].imagenes[1].url}" alt="" class="imgProducto">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="secInformacion">
                        <section>
                            <section class="headerCardProducto">
                                <div class="contTitulo">
                                    <span class="seccionEstrellas" data-puntaje="${objJson[i].puntuacion}">
                                        ${objJson[i].categoria.titulo}
                                    </span>
                                    <h3 class="tituloCardProducto">${objJson[i].nombre}</h3>
                                 </div>
                                <div class="contPuntaje">
                                    <p class="numeroPuntaje"> ${objJson[i].puntuacion}</p>
                                    <div class="textPuntaje"></div>
                                </div>
                                
                            </section>
                            <span class="infoUbicacion">
                                <i class="fas fa-map-marker-alt"></i> A 930m del centro 
                                <a href="${objJson[i].ubicacion2}" class="linkAMapa" target="_blank">  MOSTRAR EN EL MAPA</a>
                            </span>
                            <div class="secCaracteristicas" data-productoId="${objJson[i].id}">
                        </div>
                        </section>
                        <section>
                        <div class="contDescripcionProducto">
                        <p class="descripcionProducto" data-productoId="${objJson[i].id}">
                         ${objJson[i].descripcionCorta}
                        </p>
                            </div>
                            <a href="">
                            <button class="btnVerMasProducto" data-productoId="${objJson[i].id}"> Ver Más</button>
                            </a>
                        </section>
                        </div>
                        </div>
        `;
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};







