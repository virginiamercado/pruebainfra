
/*

===========Comandos para crear la base de datos, usuario y contraseña en MySQL==============
create database digitalbooking;

create user 'root2'@'%' identified by 'password2';

grant all on digitalbooking.* to 'root2'@'%'
 


=============== Ejemplo de body para el POST en postman====================

//CATEGORIAS

{
    "titulo": "Hoteles",
    "descripcion": "Multiples Hoteles, de gran variedad con ofertas exclusivas que solo encontraras aca!",
    "imagen": "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1121&q=80"
},
{
    "titulo": "Hostels",
    "descripcion": "Amplia gama de Hostels para descubrir y visitar en tu viaje que solo podras encontrar en nuestra pagina",
    "imagen": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
    },
    {
    "titulo": "Resorts",
    "descripcion": "Mirá nuestra selección de resorts geniales a lo largo de mundo que se ajustan perfecto a lo que necesitas",
    "imagen": "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
    "titulo": "Glampings",
    "descripcion": "Para una experiencia diferente y fuera de lo normal, los mejores glampings disponibles!",
    "imagen": "https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    }



// CIUDADES ID=1/7
/*

{
    "nombre":"Buenos Aires",
    "nombre_pais":"Argentina"
},
{
    "nombre":"Bogota",
    "nombre_pais":"Colombia"
},
{
    "nombre":"San Pablo",
    "nombre_pais":"Brasil"
},
{
    "nombre":"Santiago de Chile",
    "nombre_pais":"Chile"
},
{
    "nombre":"Madrid",
    "nombre_pais":"España"
},
{
    "nombre":"París",
    "nombre_pais":"Francia"
},
{
    "nombre":"Roma",
    "nombre_pais":"Italia"
}

*/


//CARACTERISTICAS
/*

{
    "nombre":"Cocina",
    "icono":"fas fa-utensils"
},
{
    "nombre":"Estacionamiento",
    "icono":"fas fa-car"
},
{
    "nombre":"Televisor",
    "icono":"fas fa-tv"
},
{
    "nombre":"Pileta",
    "icono":"fas fa-swimming-pool"
},
{
    "nombre":"Aire Acondicionado",
    "icono":"far fa-snowflake"
},
{
    "nombre":"Wifi",
    "icono":"fas fa-wifi"
},
{
    "nombre":"Apto Mascotas",
    "icono":"fas fa-paw"

}
*/


//PRODUCTOS
/*
    1 RESORT

{
"nombre": "Pualy Resort & Spa",
"descripcionCorta": "Este maravilloso Resort de Buenos Aires, con aire acondiconado y televisor en todas las  habitaciones, y pileta compartida, completamente apto para mascotas",
"descripcionLarga":"Desde hace 20 años trabajamos en hacer de tu estadía un momento inolvidable, poniendo énfasis en ofrecer siempre un servicio de calidad y bienestar. Hoy más que nunca reafirmamos nuestro compromiso con ello preparándonos para recibirte en un entorno de seguridad y confianza. hemos adecuado nuestros estándares apegándonos a las recomendaciones de la Organización Mundial de la Salud",
"ubicacion": "https://www.google.com/maps/place/Pualy+Resort+%26+Spa/@-36.1976205,-60.4100551,7z/data=!4m13!1m6!2m5!1sresort+buenos+aires!5m3!5m2!4m1!1i2!3m5!1s0x95bb63dff59131b5:0xe7b81251defb7d7a!5m2!4m1!1i2!15sChNyZXNvcnQgYnVlbm9zIGFpcmVzWhUiE3Jlc29ydCBidWVub3MgYWlyZXOSAQVob3RlbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSamVrbFlPR1ZCRUFF",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296996.244081479!2d-60.410055088475474!3d-36.197620542084174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb63dff59131b5%3A0xe7b81251defb7d7a!2sPualy%20Resort%20%26%20Spa!5e0!3m2!1ses-419!2sar!4v1636495798206!5m2!1ses-419!2sar",
"puntuacion": 8,
"categoria": {
    "id": 3
},
"ciudad": {
    "id": 1
},
"imagenes": [
{
"titulo": "resort03",
"url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort02",
"url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort01",
"url": "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort05",
"url": "https://images.unsplash.com/photo-1596178065887-1198b6148b2bixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort04",
"url": "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}
    ],
        "caracteristicas": [
            {
                "id": 5
            },
            {
                "id": 4
            },
            {
                "id": 7
            },
            {
                "id": 3
            }
        ]
    }

    2 RESORT
{
"nombre": "InterContinental Sao Paulo",
"descripcionCorta": "Para aquellos que visiten San Pablo, InterContinental Sao Paulo es una magnífica elección para descansar",
"descripcionLarga": "Conocido por su ambiente romántico y su proximidad a fantásticos restaurantes y atracciones, Arakur Resort & Spa te ayuda a disfrutar de lo mejor de Ushuaia. Las habitaciones de los huéspedes incluyen televisor de pantalla plana, aire acondicionado y minibar, e InterContinental Sao Paulo te ayuda a que estés conectado, ya que dispone de wifi gratuito. También puedes aprovechar algunos de los servicios que ofrece el complejo turístico, como conserje y servicio de habitaciones. Además, los huéspedes pueden disfrutar de piscina y desayuno durante su visita. Otra ventaja añadida es que hay parking gratis disponible para los huéspedes",
"ubicacion": "https://www.google.com/maps/place/InterContinental+Sao+Paulo/@-23.565796,-46.7241171,12z/data=!4m9!1m2!2m1!1sresort!3m5!1s0x94ce59c643816cef:0xc82580c2052d077e!5m2!4m1!1i2!15sCgZyZXNvcnSSAQVob3RlbA",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117026.35874810329!2d-46.724117141796846!3d-23.565796000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c643816cef%3A0xc82580c2052d077e!2sInterContinental%20Sao%20Paulo!5e0!3m2!1ses-419!2sar!4v1636496675678!5m2!1ses-419!2sar",
"puntuacion": 9,
"categoria": {
    "id": 3
},
"ciudad": {
    "id": 3
},
"imagenes": [
{
"titulo": "resort03",
"url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort02",
"url": "https://images.unsplash.com/photo-1561501878-aabd62634533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort01",
"url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort05",
"url": "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
"titulo": "resort04",
"url": "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}
    ],
"caracteristicas": [
{
    "id": 5
},
{
    "id": 4
},
{
    "id": 7
},
{
    "id": 3
}
    ]
}


    1 HOTEL
{
"nombre": "La Nouvelle Republique",
"descripcionCorta": "Conocido por su ambiente para familias y su proximidad a fantásticos restaurantes y atracciones",
"descripcionLarga": "Las habitaciones de los huéspedes incluyen aire acondicionado, y Hotel la Nouvelle Republique te ayuda a que estés conectado, ya que dispone de wifi gratuito. También puedes aprovechar algunos de los servicios que ofrece el hotel, como recepción abierta 24 horas, conserje y espacio para guardar el equipaje. Además, los huéspedes pueden disfrutar de desayuno incluido durante su visita. Otra ventaja añadida es que hay garaje para aparcar disponible para los huéspedes",
"ubicacion": "https://www.google.com/maps/place/The+New+Republic/@47.374739,0.6936301,17z/data=!3m1!4b1!4m5!3m4!1s0x47fcd42ccdec4771:0x4daeea7ca69149bd!8m2!3d47.3747326!4d0.695461",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.906723045874!2d0.6936301154996185!3d47.3747389791699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd42ccdec4771%3A0x4daeea7ca69149bd!2sThe%20New%20Republic!5e0!3m2!1ses-419!2sar!4v1636496857802!5m2!1ses-419!2sar",
"puntuacion": 7,
"categoria": {
    "id": 1
},
"ciudad": {
    "id": 6
},
"imagenes": [
{
"titulo": "hotel01",
"url": "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
},
{
"titulo": "hotel02",
"url": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
"titulo": "hotel03",
"url": "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
},
{
"titulo": "hotel04",
"url": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
"titulo": "hotel05",
"url": "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
}
    ],
"caracteristicas": [
{
    "id": 1
},
{
    "id": 2
},
{
    "id": 6
},
{
    "id": 4
}
    ]
}


        2 HOTEL
{
"nombre": "Pestana Plaza Mayor",
"descripcionCorta": "Hotel temático madrileño, que le hará sentir que está en Madrid en todo momento",
"descripcionLarga": "dispone de 200 amplias, agradables y confortables habitaciones. Disponibles con camas individuales o cama de matrimonio (bajo petición a la llegada al Hotel). Equipadas con los servicios e instalaciones que necesitas para hacer de tu estancia en el centro de Madrid un momento único",
"ubicacion": "https://www.google.com/maps/place/Pestana+Plaza+Mayor/@40.4147668,-3.7092423,17z/data=!3m1!4b1!4m8!3m7!1s0xd42287f24aff01d:0x460c3ae300ed9d4a!5m2!4m1!1i2!8m2!3d40.4146969!4d-3.7070471",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.732933920888!2d-3.7092422847422752!3d40.41476677936523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287f24aff01d%3A0x460c3ae300ed9d4a!2sPestana%20Plaza%20Mayor!5e0!3m2!1ses-419!2sar!4v1636496933678!5m2!1ses-419!2sar",
"puntuacion": 8,
"categoria": {
    "id": 1
},
"ciudad": {
    "id": 5
},
"imagenes": [
    {
"titulo": "hotel01",
"url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
"titulo": "hotel02",
"url": "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
    },
    {
"titulo": "hotel03",
"url": "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
"titulo": "hotel04",
"url": "https://images.unsplash.com/photo-1601565415267-724db0e9fbdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
"titulo": "hotel05",
"url": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    }
],
"caracteristicas": [
{
    "id": 7
},
{
    "id": 6
},
{
    "id": 2
},
{
    "id": 3
}
]
}


            1 HOSTEL
{
"nombre": "Yellow Square",
"descripcionCorta": "Ocupa un edificio histórico situado detrás de la basílica de Santa María de los Ángeles y de la piazza della Repubblica de Roma",
"descripcionLarga": "Incluye desayuno donde puedes escoger entre muchas opciones, queda a pocas cuadras de la estación Termini, los empleados son sumamente amables y te proveen mapas, consejos y demás información útil, se puede caminar a prácticamente todos los lugares de interés de la ciudad, los espacios son ordenados, limpios y muy amplios, el Wifi es muy bueno y tiene buena vista a la calle y el ascensor es muy rápido, al llegar te piden un seguro que se te devuelve después, además si necesitas guardar tu equipaje mientras terminas de recorrer la ciudad ello lo hacen sin ningún costo adicional",
"ubicacion": "https://www.google.com/maps/place/YellowSquare+Rome/@41.9046931,12.5021823,17z/data=!3m1!4b1!4m8!3m7!1s0x132f61a065aced1f:0x2bc2cc86c824faf4!5m2!4m1!1i2!8m2!3d41.9047013!4d12.5044225",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.449582376439!2d12.50218231530694!3d41.904693079220074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a065aced1f%3A0x2bc2cc86c824faf4!2sYellowSquare%20Rome!5e0!3m2!1ses-419!2sar!4v1636497019602!5m2!1ses-419!2sar",
"puntuacion": 8,
"categoria": {
    "id": 2
},
"ciudad": {
    "id": 7
},
"imagenes": [
    {
"titulo": "hostel01",
"url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
    },
    {
"titulo": "hostel02",
"url": "https://images.unsplash.com/photo-1626265774643-f1943311a86b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
"titulo": "hostel03",
"url": "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
"titulo": "hostel04",
"url": "https://images.unsplash.com/photo-1577079527470-3c2ba0c1f7a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
    },
    {
"titulo": "hostel05",
"url": "https://images.unsplash.com/photo-1547371890-cd66a3dcf386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
],
"caracteristicas": [
    {
        "id": 1
    },
    {
        "id": 4
    },
    {
        "id": 3
    },
     {
        "id": 5
    }
]
}


           2 HOSTEL
{
"nombre": "Providencia",
"descripcionCorta": "Un hogar lejos de casa para viajeros y mochileros en Santiago de Chile",
"descripcionLarga": "Con la ubicación perfecta, desayuno variado, camas confortables, amplios y bien decorados espacios comunes y un staff atencioso y eficaz, el Hostal Providencia te garantiza una agradable y divertida experiencia con la mejor relación precio-calidad de la ciudad. Otro gran atractivo son nuestras inolvidables actividades diarias: noches de terremoto (bebida típica chilena), pisco sour, pasta y vino, hamburguesas, fajitas, choripan, hot dogs, risotto, degustación de vinos y mucho más!",
"ubicacion": "https://www.google.com/maps/place/Hostal+Providencia/@-33.440895,-70.6356649,17z/data=!3m1!4b1!4m8!3m7!1s0x9662c59d31f6ca49:0x21410632cda12a15!5m2!4m1!1i2!8m2!3d-33.440895!4d-70.6334762",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3228246301237!2d-70.63566488495242!3d-33.440894980776704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59d31f6ca49%3A0x21410632cda12a15!2sHostal%20Providencia!5e0!3m2!1ses-419!2sar!4v1636497101022!5m2!1ses-419!2sar",
"puntuacion": 9,
"categoria": {
    "id": 2
},
"ciudad": {
    "id": 4
},
"imagenes": [
                {
"titulo": "hostel01",
"url": "https://images.unsplash.com/photo-1566681855366-75a2da1c7221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
"titulo": "hostel02",
"url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
"titulo": "hostel03",
"url": "https://images.unsplash.com/photo-1617387247724-03782b322835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
"titulo": "hostel04",
"url": "https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                },
                {
"titulo": "hostel05",
"url": "https://images.unsplash.com/photo-1626265774643-f1943311a86b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                }
            ],
"caracteristicas": [
    {
        "id": 3
    },
    {
        "id": 6
    },
    {
        "id": 1
    },
    {
        "id": 4
    }
        ]
    }



                  1 GLAMPING
{
"nombre": "Bajo el Cielo",
"descripcionCorta": "Diseñado para la tranquilidad y la contemplación, con todas las comodidades de un hotel de lujo",
"descripcionLarga": "Es un lugar rodeado de la naturaleza con todas las comodidades premium de un hotel, donde podrás reconectarte con tu pareja y con la naturaleza. Nos encargaremos de hacerte olvidar del estrés de la ciudad y podrás revitalizarte. Tenga en un área privada equipada",
"ubicacion": "https://www.google.com/maps/place/Bajo+el+Cielo+Glamping/@4.9208049,-73.8358863,17z/data=!3m1!4b1!4m8!3m7!1s0x8e400b0ad5860015:0x11867c9efa16899e!5m2!4m1!1i2!8m2!3d4.9208049!4d-73.8336976",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.112705554636!2d-73.83588628541757!3d4.920804896427355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e400b0ad5860015%3A0x11867c9efa16899e!2sBajo%20el%20Cielo%20Glamping!5e0!3m2!1ses-419!2sar!4v1636497191961!5m2!1ses-419!2sar",
"puntuacion": 8,
"categoria": {
    "id": 4
},
"ciudad": {
    "id": 2
},
"imagenes": [
{
"titulo": "glamping01",
"url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
"titulo": "glamping02",
"url": "https://images.unsplash.com/photo-1506126799754-92bc47fc5d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
"titulo": "glamping03",
"url": "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
},
{
"titulo": "glamping04",
"url": "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
"titulo": "glamping05",
"url": "https://images.unsplash.com/photo-1562610744-7c427b542ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
}
],
"caracteristicas": [
        {
            "id": 2
        },
        {
            "id": 6
        },
        {
            "id": 7
        },
        {
            "id": 5
        }
    ]
}



                  2 GLAMPING
{
"nombre": "Terme di Vulci",
"descripcionCorta": "La búsqueda del b&b para familias ideal en Civitella Marittima",
"descripcionLarga": "oce servicio de habitaciones, chimenea exterior y espacio para guardar el equipaje. Además, como huésped de Azienda Agricola Pietra Serena B&B puedes disfrutar de jacuzzi y desayuno disponibles allí mismo. Los huéspedes que lleguen en coche tienen acceso a parking gratis",
"ubicacion": "https://www.google.com/maps/place/Terme+di+Vulci+-+Glamping+and+Spa/@42.4612655,7.1548271,6z/data=!4m8!3m7!1s0x1328e660a3e77011:0xef6d09063d3c506c!5m2!4m1!1i2!8m2!3d42.4612684!4d11.6372825",
"ubicacion2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6028132.803125782!2d7.154827094836175!3d42.4612654791803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1328e660a3e77011%3A0xef6d09063d3c506c!2sTerme%20di%20Vulci%20-%20Glamping%20and%20Spa!5e0!3m2!1ses-419!2sar!4v1636497269480!5m2!1ses-419!2sar",
"puntuacion": 7,
"categoria": {
            "id": 4
        },
"ciudad": {
        "id": 7
        },
"imagenes": [
        {
        "titulo": "glamping01",
        "url": "https://images.unsplash.com/photo-1565036558162-e551c82632bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
        "titulo": "glamping02",
        "url": "https://images.unsplash.com/photo-1563970200548-59de13b04dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
        },
        {
        "titulo": "glamping03",
        "url": "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        },
        {
        "titulo": "glamping04",
        "url": "https://images.unsplash.com/photo-1634662593278-11d75aacab28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        },
        {
            "titulo": "glamping05",
            "url": "https://images.unsplash.com/photo-1635314924786-f3a501a87458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
        }
    ],
    "caracteristicas": [
        {
            "id": 6
        },
        {
            "id": 2
        },
        {
            "id": 1
        },
        {
            "id": 3
        }
    ]
}

*/





