/*============== HEADER ====================== */
let header = document.querySelector("header")
let cajaIniciales= document.querySelector(".iniciales")



/*============== CONDICIONALES PARA MODIFICAR HEADER ====================== */
if (localStorage.getItem("sesion") == "true" ) {
    header.innerHTML = `
<div class="container">
    <div class="logo">
        <a href="/Index.html"><img  class="img-logo" src="/img/logo_2.png" alt="logo"></a>
    </div>
    <div class="menu_bar">
        <a href="#" class="bt-menu">
            <span class="icon-list2"><i class="fas fa-bars"></i></span>
        </a>
    </div>
        <nav class="menu" id="menu">
        <div class="header-responsive">
            <button id="cerrar" class="cerrar">x</button>
        <div class="header-menu-responsive">
        <p>
        MENU
        </p>
        </div>
        <div class="cajaGneralUsuario">
        <section>
            <span onClick="cerrarSesion()" class="cerrarLetra">X</span>
        </section>
        <section class="seccionInfoUsuario">
        <div class="iniciales">
        <p> ${localStorage.getItem("userNombre").slice(0,1).toLocaleUpperCase() + localStorage.getItem("userApellido").slice(0,1).toLocaleUpperCase()}</p>
        </div>
        <div class="saludoUser">
            Hola, 
            <span> ${ localStorage.getItem("userNombre") +" "+localStorage.getItem("userApellido") }</span>
        </div>
        
    </section>
    <section>
        <span class="spanCerrarSesion">¿Deseas <a class="cerrar" onClick="cerrarSesion()"  href="LogIn/LogIn.html">cerrar sesión</a>?</span>
        </section>
        </div>
        
       
    </div>
            <div class="red-social-header">
            <a href="https://www.facebook.com/"<i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/"<i class="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/"<i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"<i class="fab fa-instagram"></i></a>
        </div>
        </nav>
</div>
`
}

else if (document.querySelector("h2") != null && document.querySelector("h2").innerHTML === "Iniciar Sesion") {
console.log(document.querySelector("h2").value);
    header.innerHTML = `
    <div class="container">
    <div class="logo">
        <a href="/Index.html"><img  class="img-logo" src="/img/logo_2.png" alt="logo"></a>
    </div>
    <div class="menu_bar">
        <a href="#" class="bt-menu">
            <span class="icon-list2"><i class="fas fa-bars"></i></span>
        </a>
    </div>
        <nav class="menu" id="menu">
        <div class="header-responsive">
            <button id="cerrar" class="cerrar">x</button>
        <div class="header-menu-responsive">
        <p>
        MENU
        </p>
        </div>
            <ul>
                
                <a class="btn-header" href="/Registro/Registro.html"><li>Crear cuenta</li></a>
            </ul>
        </div>
        
            
            <div class="red-social-header">
                <a href="https://www.facebook.com/"<i class="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/"<i class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/"<i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/"<i class="fab fa-instagram"></i></a>
            </div>
        </nav>
</div>
`
}
else if (document.querySelector("h2") != null && document.querySelector("h2").innerHTML === "Crear Cuenta") {
    console.log(document.querySelector(".tituloRegistro").value);

    header.innerHTML = `
    <div class="container">
    <div class="logo">
        <a href="/Index.html"><img  class="img-logo" src="/img/logo_2.png" alt="logo"></a>
    </div>
    <div class="menu_bar">
        <a href="#" class="bt-menu">
            <span class="icon-list2"><i class="fas fa-bars"></i></span>
        </a>
    </div>
        <nav class="menu" id="menu">
        <div class="header-responsive">
            <button id="cerrar" class="cerrar">x</button>
        <div class="header-menu-responsive">
        <p>
        MENU
        </p>
        </div>
            <ul>
                
            <a class="btn-header" href="/LogIn/LogIn.html"><li>Iniciar sesión</li></a>
            </ul>
        </div>
            <div class="red-social-header">
            <a href="https://www.facebook.com/"<i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/"<i class="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/"<i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"<i class="fab fa-instagram"></i></a>
        </div>
        </nav>
</div>
`
}
else{
    header.innerHTML= `
<div class="container">
    <div class="logo">
        <a href="/Index.html"><img  class="img-logo" src="/img/logo_2.png" alt="logo"></a>
    </div>
    <div class="menu_bar">
        <a href="#" class="bt-menu">
            <span class="icon-list2"><i class="fas fa-bars"></i></span>
        </a>
    </div>
        <nav class="menu" id="menu">
        <nav class="menu" id="menu">
        <div class="header-responsive">
            <button id="cerrar" class="cerrar">x</button>
        <div class="header-menu-responsive">
        <p>
        MENU
        </p>
        </div>
            <ul>
                <a class="btn-header" href="/Registro/Registro.html"><li>Crear cuenta</li></a>
                <a class="btn-header" href="/LogIn/LogIn.html"><li>Iniciar sesión</li></a>
            </ul>
            </div>
                <div class="red-social-header">
                <a href="https://www.facebook.com/"<i class="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/"<i class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/"<i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/"<i class="fab fa-instagram"></i></a>
            </div>
        </nav>
</div>
`
}



/*============== FUNCION PARA CERRAR SESION CON EL HEADER ====================== */
function cerrarSesion() {
    localStorage.setItem("sesion", false)
    window.location.pathname='/index.html'
    alert("Cerrando Sesion")
}




/*============== JQUERY PARA EL DESPLEGABLE LATERAL EN MOVIL ====================== */
$(document).ready(maine);

let contador = 1;

function maine(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
		if(contador == 1){
			$('nav').animate({
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				right: '-100%'
			});
		}
	});

};

$(document).ready(maindos);

let contadore = 1;
function maindos(){
	$('#cerrar').click(function(){
		// $('nav').toggle(); 
		if(contadore == 1){
			$('nav').animate({
				right: '-100%'
			});
			contadore = 1;
		} else {
			contadore = 1;
			$('nav').animate({
				right: '0',
			});
		}
	});
};




/*============== FOOTER ====================== */

let footer = document.querySelector(".footer");
footer.innerHTML = `
<div class="pie-de-pagina">
<div class="box">
    <figure>
            <p>© 2021 Digital Booking</p>
    </figure>
</div>
<div class="box">
    <div class="red-social">
        <a href="https://www.facebook.com/"<i class="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/"<i class="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com/"<i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"<i class="fab fa-instagram"></i></a>
    </div>
</div>
</div>
`









 