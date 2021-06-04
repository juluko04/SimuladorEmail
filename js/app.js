//variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');

//variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');




eventListeners();

function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', resetearFormulario);

    

};


//funciones 

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursos-not-allowed', 'opacity-50');

};

//valida el formulario 

function validarFormulario(e){

    if(e.target.type === 'email'){
        const resultado = e.target.value.indexOf('@');
        if ( resultado < 0){

            mostrarError('El email no es valido');
        }
    }

    if(e.target.value.length > 0){
        e.target.classList.add('border', 'border-green-500');


    }
     else {
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }
    if( email.value && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');

    }
};

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje ;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

  

    const errores = document.querySelectorAll('.error');
        if( errores.length === 0) {
            formulario.appendChild(mensajeError);
        }
    

};

function enviarEmail (e){

    e.preventDefault();
    
    //mostrar spiner

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout( () => {
        spinner.style.display = 'none';
  

    const parrafo = document.createElement('p');
    parrafo.textContent = 'Mensaje enviado'
    formulario.insertBefore( parrafo, spinner)
    parrafo.classList.add('text-center', 'my-10', 'p2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')
    setTimeout ( () =>{
        parrafo.remove();
        resetearFormulario();
    }, 5000);
}, 3000);
}

function resetearFormulario(){
    formulario.reset();

    iniciarApp();
};