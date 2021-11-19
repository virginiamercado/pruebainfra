//TRAER ID DE PRODUCTO SELECCIONADO
let url =window.location.search.slice(1,2);
console.log(url);

fetch(`http://localhost:8080/productos/${url}`)
.then(res => res.json())
.then(function (data){
        let main= document.querySelector("main")
        main.innerHTML +=`
        <section>
        <div class="headerDetalleProducto nombreHotel">
            <section class="tituloProducto">
                <p>${data.categoria.titulo.toUpperCase()}</p>
                <H2>${data.nombre}</H2>
            </section>
            <section class="flecha-header-nombre">
                <a href="/Index.html">
                    <i id="flecha-icono" class="fas fa-chevron-left "></i>
                </a>
            </section>
        </div>
        
        <div class="headerDetalleProducto headerDos-producto">
            <section class="ubicacion-header">
                <i class="fas fa-map-marker-alt"></i> 
                <div>
                <p> ${data.ciudad.nombre}, ${data.ciudad.nombre_pais}</p>
                <p class="texto-ubicacion">A 940m del centro</p>
            </div> 
            </section>
            <section class="calificacion-header-producto">
                <div class="calificacion-producto">
                    <p>Muy Bueno</p>
                    <span class="estrellas">
                    </span>
                </div>
                <p class="puntaje-numero">
                    ${data.puntuacion}
                </p>
            </section>
        </div>
        
        <div class="headerDetalleProducto compartir">
            <!-- <i class="st-toggle fas fa-share-alt"></i> -->
            <i class="far fa-heart"></i>
            <div id="compartir" class="sharethis-inline-share-buttons"></div>
        </div>
        </section>
        
        
        <section class="galeriaImgs">
        <img class="Img principal" src="${data.imagenes[0].url}" alt="" onClick="aparecerGaleria()">
        
        
        <img class="Img secundaria cuatro" src="${data.imagenes[1].url}" alt="" onclick="aparecerGaleria()">
        
        
        <img class="Img secundaria uno" src="${data.imagenes[2].url}" alt="" onclick="aparecerGaleria()">
        
        
        <img class="Img secundaria dos" src="${data.imagenes[3].url}" alt="" onclick="aparecerGaleria()">
        
        
        <img class="Img secundaria tres" src="${data.imagenes[4].url}" alt="" onclick="aparecerGaleria()">
        
        <div class="carousel desaparecer">
        <div id="imagen"></div>
    </div>

        <span class="verMasImg" onclick="aparecerGaleria()">Ver Más</span>
        
        </section>
        
       


        <section class="infoProducto">
        <h3 class="tituloDescrip tFecha"> Alójate en el corazón de Buenos Aires</h3>
        <div class="content-descripcion">
        <p class="textoDescrip">
          ${data.descripcionLarga}
        </p>
       
        </div>
        
        <h3 class="tituloDescrip">¿Qué ofrece este lugar?</h3>
        
        <seccion class="conteinerIconos">
        <div>
        </div>
        </seccion>
        
    <section id="bloque-fechas-disponibles">
        <h2 id="fechas-disponibles-titulo" class="tituloDescrip tFecha">Fechas disponibles</h2>

        <div id="bloque-disponibilidad">
            <div id="datepick"></div>
            <div id="informacion-reserva">
                <h5 id="texto-iniciar-reserva"></h5>
                <button id="button-iniciar-reserva">Iniciar reserva</button>
            </div>
        </div>
    </section>
        
        <section class="secMapa">
            <h3 class="tituloDescrip">¿Dónde vas a estar?</h3>
            <span class="mapaCiudad">Buenos Aires, Argentina</span>
        
            <iframe src="${data.ubicacion2}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        
        </section>
        
        
        
        
        <section class="sectionPoliticas">
        <h3 class="tituloDescrip">Qué tenés que saber</h3>
        
        <div class="secPoliticas">
        
            <div>
            <h4>Normas de la casa</h4>
            <span>Check-out: 10:00</span>
            <span>No se permiten fiestas</span>
            <span>No fumar</span>
            </div> 
        
            <div>
            <h4>Salud y Seguridad</h4>
            <span>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavius</span>
            <span>Detector de humo</span>
            <span>Depósito de seguridad</span>
            </div>
        
        
            <div>
            <h4>Politica de cancelación</h4>
            <span>Agregá las fechas de tu viaje para obtener los detalles de cancelacion de esta estadia</span>
            </div>
        
        </div>
        </section>
        
        
        </section>
        `






//FUNCION CALENDARIO ESTATICO

$(function calendario() {
    $("#datepick").datepick({
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		dateFormat: 'dd/mm/yyyy',
		firstDay: 1,
		prevText: '&#x3c;',
		prevStatus: '',
		prevJumpText: '&#x3c;&#x3c;',
		prevJumpStatus: '',
		nextText: '&#x3e;',
		nextStatus: '',
		nextJumpText: '&#x3e;&#x3e;',
		nextJumpStatus: '',
		currentText: 'Hoy',
		todayText: '',
		todayStatus: '',
		clearText: 'Limpiar',
		clearStatus: '',
		closeText: 'Cerrar',
		closeStatus: '',
		yearStatus: '',
		monthStatus: '',
		weekText: 'Sm',
		weekStatus: '',
		dayStatus: 'D, M d',
		defaultStatus: '',
		isRTL: false,
        monthsToShow: 2,
        showOtherMonths: true,
        changeMonth: false,
        startDate: '0d',
        minDate: 0,
        closeOnSelect:false,
        multiSelect: 999,
        showTrigger: '#calImg',
        onDate: function(date){ //Funcion para desactivar fechas
            var holidays = [new $.datepick.newDate(2021, 12, 25), new $.datepick.newDate(2021, 12, 26)
            ,new $.datepick.newDate(2021, 11, 14),new $.datepick.newDate(2021, 11, 13),new $.datepick.newDate(2021, 12, 20),
            new $.datepick.newDate(2021, 11, 15),new $.datepick.newDate(2021, 11, 26),new $.datepick.newDate(2021, 12, 23)];
            holidays = $.map(holidays, function(holiday) { return holiday.getTime(); });

            if ($.inArray(date.getTime(), holidays) > -1) {
                return {
                    dateClass: 'bloqueado',
                    selectable: false};
            }
            return {};
        }
    })
})

// FUNCION TRAER FECHAS EN LOCAL
console.log(localStorage.getItem("fecha"));
console.log(document.querySelector("#texto-iniciar-reserva"));

if (localStorage.getItem("fecha") == null) {
    console.log("no");
    document.querySelector("#texto-iniciar-reserva").innerHTML=`
    Agregá tus fechas de viaje para obtener precios exactos.
    `
} else {
    console.log("SI");
    document.querySelector("#texto-iniciar-reserva").innerHTML=`
    Fechas Previamente Seleccionadas
    <br>
    ${localStorage.getItem("fecha")}
    `
}

//FUNCION PARA PONER PUNTAJES AUTOMATICOS
        function puntajes(numero) {
            numero = data.puntuacion
            
            if (numero <= 10 && numero > 8) {
                document.querySelector(".estrellas").innerHTML=`
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">`
                document.querySelector(".calificacion-producto").childNodes[1].innerHTML=`
                Excelente `
                
            }    
            else if (numero <= 8 && numero > 6) {
                document.querySelector(".estrellas").innerHTML=`
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">`
                document.querySelector(".calificacion-producto").childNodes[1].innerHTML=`
                Muy Bueno `
                
            } 
            else if (numero <= 6 && numero > 5) {
                document.querySelector(".estrellas").innerHTML=`
                <i class="fas fa-star">
                <i class="fas fa-star">
                <i class="fas fa-star">`
                document.querySelector(".calificacion-producto").childNodes[1].innerHTML=`
                Bueno `
                
            } 
            else if (numero <= 5 && numero > 3) {
                document.querySelector(".estrellas").innerHTML=`
                <i class="fas fa-star">
                <i class="fas fa-star">`
                document.querySelector(".calificacion-producto").childNodes[1].innerHTML=`
                Regular `
            } 
            else{
                document.querySelector(".estrellas").innerHTML=`
                <i class="fas fa-star">`
                document.querySelector(".calificacion-producto").childNodes[1].innerHTML=`
                Malo `
            }
        
        
            }
        puntajes()
        //FUNCION PARA PONER CARACTERISTICAS AUTOMATICOS
        function caracteristicas() {

           let contentIconos = document.querySelector(".conteinerIconos").childNodes[1]
            data.caracteristicas.forEach(caract =>{
                contentIconos.innerHTML +=`
                <p class="servicio"><i class="${caract.icono}"></i> ${caract.nombre} </p>
                `
            })
        
        
            }
        caracteristicas()


        //FUNCION PARA PONER IMAGENES DEL DISPLAY
        data.imagenes.forEach(img=>{
             document.querySelector(".slider-content").innerHTML+=`
        <div class="slider-single">
                           <img class="slider-single-image" src="${img.url}" alt="1" />
                       </div>
        `
        })
    
//TERMINA EL THEN




//FUNCIONES PARA DISPLAY DE GALERIA
const repeat = false;
const noArrows = false;
const noBullets = false;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('fas')
    iLeft.classList.add('fa-chevron-left')
    leftArrow.classList.add('slider-left')
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('fas')
    iRight.classList.add('fa-chevron-right')
    rightArrow.classList.add('slider-right')
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();




let cerrarGImagenes = document.querySelector(".cerrarGaleria")
let seccionGImagenes = document.querySelector(".galeriaDeImagenes")

cerrarGImagenes.addEventListener("click", function () {

    seccionGImagenes.classList.toggle("aparecer")
    let body =document.querySelector("body")
    body.classList.toggle("overflowBody")
})


function aparecerGaleria() {
    let seccionGImagenes = document.querySelector(".galeriaDeImagenes")
    seccionGImagenes.classList.toggle("aparecer")
    let body =document.querySelector("body")
    body.classList.toggle("overflowBody")


}
//FUNCIONES PARA DISPLAY DE GALERIA



});
//TERMINA EL THEN


function aparecerGaleria() {
    let seccionGImagenes = document.querySelector(".galeriaDeImagenes")
    seccionGImagenes.classList.toggle("aparecer")
    let body =document.querySelector("body")
    body.classList.toggle("overflowBody")


}





//Cambio de n° de meses responsive
var debounce;
  $(window).resize(function() {
    clearTimeout(debounce);
    if ($(window).width() < 800) {
      debounce = setTimeout(function() {
        debounceDatepicker(1);
      }, 100);
    } else {
      debounce = setTimeout(function() {
        debounceDatepicker(2)
      }, 100);
    }
  }).trigger('resize');

  function debounceDatepicker(no) {
    $("#datepick").datepick("option", "monthsToShow", no);
  }




//FUNCION PARA FOTOS AUTOMATICAS EN MOVIL
fetch(`http://localhost:8080/productos/${url}`)
.then(res => res.json())
.then(function (data){

    let img =[];

    data.imagenes.forEach(mg =>{
       img.push(mg.url) 
    })
    
    const IMAGENES = img;
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagen');
    let intervalo;
    
    
    
    function pasarFoto() {
       if(posicionActual >= IMAGENES.length - 1) {
           posicionActual = 0;
       } else {
           posicionActual++;
       }
       renderizarImagen();
    }
    
    
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        document.querySelector(".indexImagen").innerHTML=`${posicionActual+1 + "/" + IMAGENES.length}`
    }
    
    
    function playIntervalo() {
       intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }
    playIntervalo()
    
    renderizarImagen(); 

})







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