const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Validación de campos
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const edad = document.getElementById("edad").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || apellidos === "" || edad === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validación específica para cada campo (agrega tus propias condiciones)
  if (!validarTexto(nombre)) {
    alert("El campo de nombre no puede contener números.");
    return;
  }

  if (!validarTexto(apellidos)) {
    alert("El campo de apellidos no puede contener números.");
    return;
  }

  if (isNaN(edad) || edad < 18) {
    alert("La edad debe ser un número mayor o igual a 18.");
    return;
  }

  if (!validarCorreoElectronico(correo)) {
    alert("Ingrese un correo electrónico válido.");
    return;
  }

  // Si todas las validaciones pasan, puedes enviar el formulario
  enviarFormulario();

  // Limpiar los campos del formulario
  form.reset();
});

function validarTexto(texto) {
  // Expresión regular para validar que no haya números
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(texto);
}

function validarCorreoElectronico(correo) {
  // Expresión regular para validar el formato del correo electrónico
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(correo);
}

function enviarFormulario() {
  // Aquí puedes enviar el formulario o realizar otras acciones necesarias
  alert("¡Formulario enviado con éxito!");
}