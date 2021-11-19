
//let seccionRecomendaciones = document.querySelector(".seccionRecomendaciones")
    

let seccionRecomendaciones = document.querySelector("#myList")


fetch("http://localhost:8080/productos/")
.then(res => res.json())
.then(function (data){

    data.forEach(producto =>{
        seccionRecomendaciones.innerHTML +=`
        <li>
         <div class="cardProducto" >
                        <div class="cajaImgProducto">
                            <img src="${producto.imagenes[1].url}" alt="" class="imgProducto">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="secInformacion">
                        <section>
                            <section class="headerCardProducto">
                                <div class="contTitulo">
                                    <span class="seccionEstrellas" data-puntaje="${producto.puntuacion}">
                                        ${producto.categoria.titulo}
                                    </span>
                                    <h3 class="tituloCardProducto">${producto.nombre}</h3>
                                 </div>
                                <div class="contPuntaje">
                                    <p class="numeroPuntaje"> ${producto.puntuacion}</p>
                                    <div class="textPuntaje"></div>
                                </div>
                                
                            </section>
                            <span class="infoUbicacion">
                                <i class="fas fa-map-marker-alt"></i> A 930m del centro 
                                <a href="${producto.ubicacion}" class="linkAMapa" target="_blank">  MOSTRAR EN EL MAPA</a>
                            </span>
                            <div class="secCaracteristicas" data-productoId="${producto.id}">
                        </div>
                        </section>
                        <section>
                        <div class="contDescripcionProducto">
                        <p class="descripcionProducto" data-productoId="${producto.id}">
                         ${producto.descripcionCorta}
                        </p>
                            </div>
                            <a href="">
                            <button class="btnVerMasProducto" data-productoId="${producto.id}"> Ver Más</button>
                            </a>
                        </section>
                        </div>
                        </div>
                        </li>

        `




        

       
    })
// TERMINA EL FOREACH


// FUNCION CORTAR DESCRIPCION

    let descripciones = document.querySelectorAll(".descripcionProducto")
       

        descripciones.forEach(descrp =>{
            if (descrp.innerHTML.length >= 110) {
                descrpCorta = descrp.innerHTML.slice(0,110)
                descrp.innerHTML =`
                ${descrpCorta}
               
                `
                descrp.parentElement.innerHTML +=`
                <span class="spanMas" data-productoId="${descrp.dataset.productoid}" >más...</span>
                `
            }
        })


// FUNCION PONER ESTRELLAS
    let seccionEstrellas = document.querySelectorAll(".seccionEstrellas");

    seccionEstrellas.forEach(secEstrella =>{
        let cajaTextPuntaje = secEstrella.parentNode.parentNode.childNodes[3].childNodes[3]
       if (secEstrella.dataset.puntaje <= 10 && secEstrella.dataset.puntaje > 8) {
        secEstrella.innerHTML +=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerHTML =`Excelente `
        
    }    
   else if (secEstrella.dataset.puntaje <= 8 && secEstrella.dataset.puntaje > 6) {
    secEstrella.innerHTML +=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Muy Bueno `
        
    } 
    else if (secEstrella.dataset.puntaje <= 6 && secEstrella.dataset.puntaje > 5) {
        secEstrella.innerHTML+=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Bueno `
        
    } 
    else  if (secEstrella.dataset.puntaje <= 5 && secEstrella.dataset.puntaje > 3) {
        secEstrella.innerHTML+=`
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Regular `
    } 
    else{
        secEstrella.innerHTML+=`
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText=`Malo `
    }
    })

// FUNCION PONER cARACTERISTICAS
let seccionCaracteris = document.querySelectorAll(".secCaracteristicas");

seccionCaracteris.forEach(caract =>{
   fetch(`http://localhost:8080/productos/${caract.dataset.productoid}`)
.then(res => res.json())
.then(function (data){
            data.caracteristicas.forEach(crt =>{
                caract.innerHTML +=`
                <i class="${crt.icono}"></i>
                `
            })
})
})

// FUNCION PARA MOSTRAR TEXTO

let spanMas = document.querySelectorAll(".spanMas");

spanMas.forEach(span =>{
    span.addEventListener("click", function () {
        fetch(`http://localhost:8080/productos/${span.dataset.productoid}`)
        .then(res => res.json())
        .then(function (data){
            if (span.parentElement.childNodes[1].innerText.length <= 110 && span.parentElement.childNodes[1].innerText.length > 80 && span.parentElement.childNodes[3].innerText !== "menos...") {
               span.parentElement.childNodes[1].innerText =`
            ${data.descripcionCorta}
            ` 
            span.parentElement.childNodes[3].innerText =`menos...`  
            }
            else if (span.parentElement.childNodes[1].innerText.length >= 95 && span.parentElement.childNodes[3].innerText != "más...") {
                span.parentElement.childNodes[1].innerText =`
             ${data.descripcionCorta.slice(0,80)}
             ` 
             span.parentElement.childNodes[3].innerText =`más...`  
             }
             else if (span.parentElement.childNodes[1].innerText.length <= 80) {
                span.parentElement.childNodes[1].innerText =`
             ${data.descripcionCorta.slice(0,100)}
             `  
             span.parentElement.childNodes[3].innerText =``
             }
        })   
        
        
        
    })
})

let productos= document.querySelectorAll(".btnVerMasProducto")

productos.forEach(producto=>{
    producto.addEventListener("click",function () {
        idproducto = producto.dataset.productoid
        producto.parentElement.setAttribute("href",`/DetalleProducto/detalleProducto.html?${idproducto}`)
      // window.location.pathname=+ `/DetalleProducto/detalleProducto.html#${idproducto}`
    })
})

$(document).ready(function () {
    size_li = $("#myList li").length;

    x=5;

    $('#myList li:lt('+x+')').show();

    if ($('#myList li:lt('+x+')').length >= size_li) {
        $('#loadMore').hide()
    }

$('#myList li').not(':lt('+x+')').hide();

    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
        if ($('#myList li:lt('+x+')').length >= size_li) {
            $('#loadMore').hide()
        }
    });
});





// TERMINA EL THEN
})
.catch(err => console.log("Error:", err));
// TERMINA EL THEN



        

function cortarDescripcion() {
        let descripciones = document.querySelectorAll(".descripcionProducto")
       

        descripciones.forEach(descrp =>{
            if (descrp.innerHTML.length >= 110) {
                descrpCorta = descrp.innerHTML.slice(0,110)
                descrp.innerHTML =`
                ${descrpCorta}
                <span class="spanMas" >más...</span>
                `
            }
        })
       
    }
    cortarDescripcion()

    


   

/*==============fUNCION PARA MOSTRAR CATEGORIAS DESDE LA API====================== */
let seccionCategorias = document.querySelector(".seccionCategorias")

   fetch("http://localhost:8080/categorias/")
.then(res => res.json())
.then(function (data){
    data.forEach(categoria => {
        seccionCategorias.innerHTML +=`
        <div class="cardCategoria" data-categoria="${categoria.titulo}">
            <img src="${categoria.imagen}" alt="" class="imagenCategoria">
            <h3 class="tituloCategoria">${categoria.titulo}</h3>
            <div class="descripcionCategoria">
            <p >${categoria.descripcion}</p>
            </div>
       </div>
`
    });









/*==============fUNCION PARA MOSTRAR PRODUCTOS SEGUN CATEGORIA====================== */
let cardCat = document.querySelectorAll(".cardCategoria")

cardCat.forEach(categoria =>{

categoria.addEventListener("click", function () {

    fetch(`http://localhost:8080/productos/categoria/${categoria.dataset.categoria}`)
    .then(res => res.json())
    .then(function (data){
    document.querySelector(".tituloRec").innerHTML=`${data[0].categoria.titulo}`
    let seccionRecomendaciones = document.querySelector("#myList").innerHTML=``
    data.forEach(producto =>{

        let seccionRecomendaciones = document.querySelector("#myList").innerHTML+=`
        <li>
        <div class="cardProducto" >
                        <div class="cajaImgProducto">
                            <img src="${producto.imagenes[1].url}" alt="" class="imgProducto">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="secInformacion">
                        <section>
                            <section class="headerCardProducto">
                                <div class="contTitulo">
                                    <span class="seccionEstrellas" data-puntaje="${producto.puntuacion}">
                                        ${producto.categoria.titulo}
                                    </span>
                                    <h3 class="tituloCardProducto">${producto.nombre}</h3>
                                 </div>
                                <div class="contPuntaje">
                                    <p class="numeroPuntaje"> ${producto.puntuacion}</p>
                                    <div class="textPuntaje"></div>
                                </div>
                                
                            </section>
                            <span class="infoUbicacion">
                                <i class="fas fa-map-marker-alt"></i> A 930m del centro 
                                <a href="${producto.ubicacion}" class="linkAMapa" target="_blank">  MOSTRAR EN EL MAPA</a>
                            </span>
                            <div class="secCaracteristicas" data-productoId="${producto.id}">
                        </div>
                        </section>
                        <section>
                        <div class="contDescripcionProducto">
                        <p class="descripcionProducto" data-productoId="${producto.id}">
                         ${producto.descripcionCorta}
                        </p>
                            </div>
                            <a href="">
                            <button class="btnVerMasProducto" data-productoId="${producto.id}"> Ver Más</button>
                            </a>
                        </section>
                        </div>
                        </div>
                        </li>
        `


    




})
//TERMINA FOREACH


let descripciones = document.querySelectorAll(".descripcionProducto")
       

        descripciones.forEach(descrp =>{
            if (descrp.innerHTML.length >= 110) {
                descrpCorta = descrp.innerHTML.slice(0,110)
                descrp.innerHTML =`
                ${descrpCorta}
               
                `
                descrp.parentElement.innerHTML +=`
                <span class="spanMas" data-productoId="${descrp.dataset.productoid}" >más...</span>
                `
            }
            else{
                descrp.innerHTML =`${descrp.innerHTML}`
            }
        })


// FUNCION PONER ESTRELLAS
    let seccionEstrellas = document.querySelectorAll(".seccionEstrellas");

    seccionEstrellas.forEach(secEstrella =>{
        let cajaTextPuntaje = secEstrella.parentNode.parentNode.childNodes[3].childNodes[3]
       if (secEstrella.dataset.puntaje <= 10 && secEstrella.dataset.puntaje > 8) {
        secEstrella.innerHTML +=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerHTML =`Excelente `
        
    }    
   else if (secEstrella.dataset.puntaje <= 8 && secEstrella.dataset.puntaje > 6) {
    secEstrella.innerHTML +=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Muy Bueno `
        
    } 
    else if (secEstrella.dataset.puntaje <= 6 && secEstrella.dataset.puntaje > 5) {
        secEstrella.innerHTML+=`
        <i class="fas fa-star">
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Bueno `
        
    } 
    else  if (secEstrella.dataset.puntaje <= 5 && secEstrella.dataset.puntaje > 3) {
        secEstrella.innerHTML+=`
        <i class="fas fa-star">
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText =`Regular `
    } 
    else{
        secEstrella.innerHTML+=`
        <i class="fas fa-star">`
        cajaTextPuntaje.innerText=`Malo `
    }
    })

// FUNCION PONER CARACTERISTICAS
let seccionCaracteris = document.querySelectorAll(".secCaracteristicas");

seccionCaracteris.forEach(caract =>{
   fetch(`http://localhost:8080/productos/${caract.dataset.productoid}`)
.then(res => res.json())
.then(function (data){
            data.caracteristicas.forEach(crt =>{
                caract.innerHTML +=`
                <i class="${crt.icono}"></i>
                `
            })
})
})

// FUNCION PARA MOSTRAR TEXTO

let spanMas = document.querySelectorAll(".spanMas");

spanMas.forEach(span =>{
    span.addEventListener("click", function () {
        fetch(`http://localhost:8080/productos/${span.dataset.productoid}`)
        .then(res => res.json())
        .then(function (data){
            if (span.parentElement.childNodes[1].innerText.length <= 110 && span.parentElement.childNodes[1].innerText.length > 80 && span.parentElement.childNodes[3].innerText !== "menos...") {
               span.parentElement.childNodes[1].innerText =`
            ${data.descripcionCorta}
            ` 
            span.parentElement.childNodes[3].innerText =`menos...`  
            }
            else if (span.parentElement.childNodes[1].innerText.length >= 95 && span.parentElement.childNodes[3].innerText != "más...") {
                span.parentElement.childNodes[1].innerText =`
             ${data.descripcionCorta.slice(0,100)}
             ` 
             span.parentElement.childNodes[3].innerText =`más...`  
             }
             else if (span.parentElement.childNodes[1].innerText.length <= 80) {
                span.parentElement.childNodes[1].innerText =`
             ${data.descripcionCorta.slice(0,100)}
             `  
             span.parentElement.childNodes[3].innerText =``
             }
        })   
        
        
        
    })
})

let productos= document.querySelectorAll(".btnVerMasProducto")

productos.forEach(producto=>{
    producto.addEventListener("click",function () {
        idproducto = producto.dataset.productoid
        producto.parentElement.setAttribute("href",`/DetalleProducto/detalleProducto.html?${idproducto}`)
      // window.location.pathname=+ `/DetalleProducto/detalleProducto.html#${idproducto}`
    })
})

$(document).ready(function () {
    size_li = $("#myList li").length;

    x=5;

    $('#myList li:lt('+x+')').show();

    if ($('#myList li:lt('+x+')').length >= size_li) {
        $('#loadMore').hide()
    }

$('#myList li').not(':lt('+x+')').hide();

    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
        if ($('#myList li:lt('+x+')').length >= size_li) {
            $('#loadMore').hide()
        }
    });
});


      })  
        //TERMINA THEN
        .catch(err => console.log("Error:", err));
        })

    })
  
})
//TERMINA EL THEN DE CATEGORIAS
.catch(err => console.log("Error:", err));





/*============== CALENDARIO ====================== */

$(function calendario() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      autoUpdateInput: false,
      locale: {
        alwaysShowCalendars: true,
        showDropdowns: true,
                      applyLabel : "Buscar",
                      cancelLabel : "Cancelar",
                      format: 'DD/MMM/YYYY',
                      daysOfWeek: ["Dom","Lun","Mar","Mie","Jue","Vie","Sáb",],
                      monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
              },
    },
    );
   document.querySelector(".btn-primary").addEventListener("click",function () {
       let fechaSelec = document.querySelector(".drp-selected").innerHTML
    localStorage.setItem("fecha",fechaSelec )
    
    console.log(document.querySelector(".input-calendario"));
    document.querySelector(".input-calendario").setAttribute("placeholder",`${fechaSelec}`)
  })  
  //FUNCION PARA PONER EL CALENDARIO ESTATICO
//   $('input[name="daterange"]').data('daterangepicker').show();
//   $('input[name="daterange"]').data('daterangepicker').hide = function () { };
  });





 /*============== API PARA SELECT DE CIUDAD ====================== */
let slecCiudad = document.querySelector(".select-ciudad")
fetch(`http://localhost:8080/ciudades/`)
.then(res => res.json())
.then(function (data){
 data.forEach(pais => {
     slecCiudad.innerHTML +=`
     <option value="${pais.nombre}" class="option-ciudad" data-ciudad="${pais.id}">${pais.nombre}</option> `
 });
 document.querySelectorAll(".option-ciudad").forEach(ciudad=>{
 ciudad.parentElement.addEventListener('change', function () {
     fetch(`http://localhost:8080/productos/ciudad/${ciudad.parentElement.value}`)
     .then(res => res.json())
     .then(function (data){
     document.querySelector(".tituloRec").innerHTML=`${data[0].ciudad.nombre}`
     let seccionRecomendaciones = document.querySelector("#myList").innerHTML=``
     data.forEach(producto =>{
 
         let seccionRecomendaciones = document.querySelector("#myList").innerHTML+=`
         <li>
         <div class="cardProducto" >
                         <div class="cajaImgProducto">
                             <img src="${producto.imagenes[1].url}" alt="" class="imgProducto">
                             <i class="fas fa-heart"></i>
                         </div>
                         <div class="secInformacion">
                         <section>
                             <section class="headerCardProducto">
                                 <div class="contTitulo">
                                     <span class="seccionEstrellas" data-puntaje="${producto.puntuacion}">
                                         ${producto.categoria.titulo}
                                     </span>
                                     <h3 class="tituloCardProducto">${producto.nombre}</h3>
                                  </div>
                                 <div class="contPuntaje">
                                     <p class="numeroPuntaje"> ${producto.puntuacion}</p>
                                     <div class="textPuntaje"></div>
                                 </div>
                                 
                             </section>
                             <span class="infoUbicacion">
                                 <i class="fas fa-map-marker-alt"></i> A 930m del centro 
                                 <a href="${producto.ubicacion2}" class="linkAMapa" target="_blank">  MOSTRAR EN EL MAPA</a>
                             </span>
                             <div class="secCaracteristicas" data-productoId="${producto.id}">
                         </div>
                         </section>
                         <section>
                         <div class="contDescripcionProducto">
                         <p class="descripcionProducto" data-productoId="${producto.id}">
                          ${producto.descripcionCorta}
                         </p>
                             </div>
                             <a href="">
                             <button class="btnVerMasProducto" data-productoId="${producto.id}"> Ver Más</button>
                             </a>
                         </section>
                         </div>
                         </div>
                         </li>
         `
 
 })


 // FUNCION CORTAR DESCRIPCION

 let descripciones = document.querySelectorAll(".descripcionProducto")
       

 descripciones.forEach(descrp =>{
     if (descrp.innerHTML.length >= 110) {
         descrpCorta = descrp.innerHTML.slice(0,110)
         descrp.innerHTML =`
         ${descrpCorta}
        
         `
         descrp.parentElement.innerHTML +=`
         <span class="spanMas" data-productoId="${descrp.dataset.productoid}" >más...</span>
         `
     }
 })


// FUNCION PONER ESTRELLAS
let seccionEstrellas = document.querySelectorAll(".seccionEstrellas");

seccionEstrellas.forEach(secEstrella =>{
 let cajaTextPuntaje = secEstrella.parentNode.parentNode.childNodes[3].childNodes[3]
if (secEstrella.dataset.puntaje <= 10 && secEstrella.dataset.puntaje > 8) {
 secEstrella.innerHTML +=`
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">`
 cajaTextPuntaje.innerHTML =`Excelente `
 
}    
else if (secEstrella.dataset.puntaje <= 8 && secEstrella.dataset.puntaje > 6) {
secEstrella.innerHTML +=`
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">`
 cajaTextPuntaje.innerText =`Muy Bueno `
 
} 
else if (secEstrella.dataset.puntaje <= 6 && secEstrella.dataset.puntaje > 5) {
 secEstrella.innerHTML+=`
 <i class="fas fa-star">
 <i class="fas fa-star">
 <i class="fas fa-star">`
 cajaTextPuntaje.innerText =`Bueno `
 
} 
else  if (secEstrella.dataset.puntaje <= 5 && secEstrella.dataset.puntaje > 3) {
 secEstrella.innerHTML+=`
 <i class="fas fa-star">
 <i class="fas fa-star">`
 cajaTextPuntaje.innerText =`Regular `
} 
else{
 secEstrella.innerHTML+=`
 <i class="fas fa-star">`
 cajaTextPuntaje.innerText=`Malo `
}
})

// FUNCION PONER cARACTERISTICAS
let seccionCaracteris = document.querySelectorAll(".secCaracteristicas");

seccionCaracteris.forEach(caract =>{
fetch(`http://localhost:8080/productos/${caract.dataset.productoid}`)
.then(res => res.json())
.then(function (data){
     data.caracteristicas.forEach(crt =>{
         caract.innerHTML +=`
         <i class="${crt.icono}"></i>
         `
     })
})
})

// FUNCION PARA MOSTRAR TEXTO

let spanMas = document.querySelectorAll(".spanMas");

spanMas.forEach(span =>{
span.addEventListener("click", function () {
 fetch(`http://localhost:8080/productos/${span.dataset.productoid}`)
 .then(res => res.json())
 .then(function (data){
     if (span.parentElement.childNodes[1].innerText.length <= 110 && span.parentElement.childNodes[1].innerText.length > 80 && span.parentElement.childNodes[3].innerText !== "menos...") {
        span.parentElement.childNodes[1].innerText =`
     ${data.descripcionCorta}
     ` 
     span.parentElement.childNodes[3].innerText =`menos...`  
     }
     else if (span.parentElement.childNodes[1].innerText.length >= 95 && span.parentElement.childNodes[3].innerText != "más...") {
         span.parentElement.childNodes[1].innerText =`
      ${data.descripcionCorta.slice(0,80)}
      ` 
      span.parentElement.childNodes[3].innerText =`más...`  
      }
      else if (span.parentElement.childNodes[1].innerText.length <= 80) {
         span.parentElement.childNodes[1].innerText =`
      ${data.descripcionCorta.slice(0,100)}
      `  
      span.parentElement.childNodes[3].innerText =``
      }
 })   
 
 
 
})
})


//FUNCION A DETALLE DE PRODUCTO
let productos= document.querySelectorAll(".btnVerMasProducto")

productos.forEach(producto=>{
producto.addEventListener("click",function () {
 idproducto = producto.dataset.productoid
 producto.parentElement.setAttribute("href",`/DetalleProducto/detalleProducto.html?${idproducto}`)
})
})



//FUNCION DE PAGINACION
$(document).ready(function () {
    size_li = $("#myList li").length;

    x=5;

    $('#myList li:lt('+x+')').show();

    if ($('#myList li:lt('+x+')').length >= size_li) {
        $('#loadMore').hide()
    }
    
$('#myList li').not(':lt('+x+')').hide();

    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
        if ($('#myList li:lt('+x+')').length >= size_li) {
            $('#loadMore').hide()
        }
    });
});








 })
 //TERMINA EL THEN
 
 
 

 })  
 }) 
 
}) 

 .catch(err => console.log("Error:", err));







/*===========================fUNCION PARA EL BOTON DE SUBIR============================== */
 $(document).ready(function(){
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
    
    $('.Subir').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.Subir').slideDown(300);
        } else {
            $('.Subir').slideUp(300);
        }
    });

});
$(window).resize(function() {
$('body, html').animate({
    scrollTop: '0px'
}, 300);
})



