function validar() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let password = document.getElementById("password").value;

  // Expresiones regulares
  let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;   // solo letras y espacios
  let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // correo válido
  let regexTelefono = /^[0-9]{8}$/;               // 8 dígitos exactos
  let regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // min 8 caracteres, 1 mayús y 1 número

  // Validación Nombre
  if (!regexNombre.test(nombre)) {
    document.getElementById("errorNombre").textContent = "❌ Solo letras permitidas";
    document.getElementById("errorNombre").className = "error";
  } else {
    document.getElementById("errorNombre").textContent = "✅ Correcto";
    document.getElementById("errorNombre").className = "ok";
  }

  // Validación Correo
  if (!regexCorreo.test(correo)) {
    document.getElementById("errorCorreo").textContent = "❌ Correo inválido";
    document.getElementById("errorCorreo").className = "error";
  } else {
    document.getElementById("errorCorreo").textContent = "✅ Correcto";
    document.getElementById("errorCorreo").className = "ok";
  }

  // Validación Teléfono
  if (!regexTelefono.test(telefono)) {
    document.getElementById("errorTelefono").textContent = "❌ Deben ser 8 dígitos";
    document.getElementById("errorTelefono").className = "error";
  } else {
    document.getElementById("errorTelefono").textContent = "✅ Correcto";
    document.getElementById("errorTelefono").className = "ok";
  }

  // Validación Password
  if (!regexPassword.test(password)) {
    document.getElementById("errorPassword").textContent = "❌ Min 8 caracteres, 1 mayúscula y 1 número";
    document.getElementById("errorPassword").className = "error";
  } else {
    document.getElementById("errorPassword").textContent = "✅ Correcto";
    document.getElementById("errorPassword").className = "ok";
  }
}
