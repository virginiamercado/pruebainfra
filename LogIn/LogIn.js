/*==============TRAE OBJETOS DEL HTML====================== */
let inputPass = document.querySelector(".inputPass")
let divInputPass = document.querySelector(".divInputPass")
let iconEye  = document.querySelector("#ojoPass")


/*==============fUNCION PARA MOSTRAR CONTRASEÑA====================== */
iconEye.addEventListener("click", function(){
if (inputPass.type =="password") {
    inputPass.type ="text";
} else {
    inputPass.type ="password";
}

iconEye.classList.toggle("fa-eye")
iconEye.classList.toggle("fa-eye-slash")
})

/*=============CAPTURANDO ELEMENTOS============= */

let inputCorreo = document.querySelector("#inputCorreoLog")
let inputPassword = document.querySelector("#inputPassLog")
let formLogeo = document.querySelector(".formLogeo")





/*=============EVENTO SUBMIT FORM LOGEO============= */
formLogeo.addEventListener('submit',function (event) {

    event.preventDefault() 

   
   
   if (correctos.length >= 2) {
    localStorage.setItem("sesion", true)
       window.location.pathname='/index.html'
   }
    else{
        alert("Algo Salio Mal, Vuelve a Intentarlo")
    }
    
})
















let correctos = []

 /*=============VALIDACION INPUT CORREO============= */
 function validarLogCorreo() {
    inputCorreo.classList.remove("errorInput")
    inputCorreo.parentElement.childNodes[5].innerHTML =``
    inputCorreo.parentElement.childNodes[5].classList.remove("errorSpan")
    console.log(inputCorreo.value);


if (localStorage.getItem("userCorreo") != inputCorreo.value) {
    console.log(inputCorreo.value);
    inputCorreo.classList.add("errorInput")
    inputCorreo.placeholder=""
    inputCorreo.parentElement.childNodes[5].classList.add("errorSpan")
     inputCorreo.parentElement.childNodes[5].innerHTML =`
     <small>*Correo no Valido</small>
     `
}


   else{
    correctos.push("|")
   }
}





     /*=============VALIDACION INPUT PASSWORD============= */
function validateLogPassword() {
    inputPassword.parentElement.parentElement.childNodes[5].innerHTML =``
    inputPassword.placeholder=""
    inputPassword.parentElement.classList.remove("errorInput")
    inputPassword.parentElement.parentElement.childNodes[5].classList.remove("errorSpan")

if (localStorage.getItem("userPassword") != inputPassword.value) {
    inputPassword.parentElement.classList.add("errorInput")
        inputPassword.parentElement.parentElement.childNodes[5].classList.add("errorSpan")
         inputPassword.parentElement.parentElement.childNodes[5].innerHTML +=`
         <small>*La Contraseña No Es Valida</small>
         `
}
   else{
    correctos.push("|")
   }
}