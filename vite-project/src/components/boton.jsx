import React from 'react'
import '../components/boton.css'

export const Boton = () => {
  return (
    function addContact() {
        // Crear elementos del formulario
        var formulario = document.createElement("form");
        var labelNombre = document.createElement("label");
        var inputNombre = document.createElement("input");
        var labelDireccion = document.createElement("label");
        var inputDireccion = document.createElement("input");
        var botonEnviar = document.createElement("button");
      
        // Elementos del formulario
        formulario.setAttribute("id", "formulario");
        labelNombre.textContent = "Nombre:";
        inputNombre.setAttribute("type", "text");
        inputNombre.setAttribute("name", "nombre");
        labelDireccion.textContent = "Dirección:";
        inputDireccion.setAttribute("type", "text");
        inputDireccion.setAttribute("name", "direccion");
        botonEnviar.setAttribute("type", "submit");
        botonEnviar.textContent = "Enviar";
      
        // Agregar elementos al formulario
        formulario.appendChild(labelNombre);
        formulario.appendChild(inputNombre);
        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(labelDireccion);
        formulario.appendChild(inputDireccion);
        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(botonEnviar);
      
        // Agregar evento al botón enviar (este es un ejemplo básico, puedes agregar validaciones u otras acciones según tus necesidades)
        botonEnviar.addEventListener("click", function(event) {
          event.preventDefault(); // Evitar que el formulario se envíe
          var nombre = inputNombre.value;
          var direccion = inputDireccion.value;
          console.log("Nombre:", nombre);
          console.log("Dirección:", direccion); });
        
      
      
      // Función para agregar el formulario cuando se hace clic en el botón
      document.getElementById("agregarFormulario").addEventListener("click", function() {
        var contenedorFormularios = document.getElementById("contenedorFormularios");
        contenedorFormularios.appendChild(addContact());

        return formulario;
        }
      
      <>
    <button onclick="addContact()" id="agregarFormulario">+</button>
    <div id="contenedorFormularios"></div>

</>);
}

