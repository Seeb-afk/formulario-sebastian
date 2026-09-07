/*
  let nombre = "Juan";
  let apellido = "Rodriguez";
  let correo = "juanrodriguez@lexpin.online";
  let telefono = "+584127850227";
  let password = "Hola1234.";

  let nombreRegex = /^[a-zA-ZñÑáÁéÉíÍóÓúÚ/s']+$/i;
  let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let telefonoRegex = /^\+\d{9,15}$/;
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&\.])[A-Za-z\d@$!%*#?&\.]{8,50}$/;

  let errors = [];

  if (!nombreRegex.test(nombre)) {
    errors.push("El nombre no es valido");
  }
  if (!nombreRegex.test(apellido)) {
    errors.push("El apellido no es valido");
  }
  if (!correoRegex.test(correo)) {
    errors.push("El correo no es valido");
  }
  if (!telefonoRegex.test(telefono)) {
    errors.push("El apellido no es valido");
  }
  if (!passwordRegex.test(password)) {
    error.push(
      "La contraseña no es valida, debe contener minimo 8 caracteres, 1 mayuscula, 1 minuscula, 1 numero, 1 caracter especial",
    );
  }

  console.log(errors);
*/

document.addEventListener("DOMContentLoaded", () => {

  let formulario = document.querySelector("#registroForm");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    //Datos ingresados
    let datosUsuario = {
      nombre: formulario.elements["nombreForm"].value,
      apellido: formulario.elements["apellidoForm"].value,
      cedula: formulario.elements["cedulaForm"].value,
      fechaNacimiento: formulario.elements["fechaNacimientoForm"].value,
      genero: formulario.elements["generoForm"].value,
      
      correo: formulario.elements["correoForm"].value,
      telefono: formulario.elements["telefonoForm"].value,
      direccion: formulario.elements["direccionForm"].value,
      ciudad: formulario.elements["ciudadForm"].value,
      pais: formulario.elements["paisForm"].value,

      modalidad: formulario.elements["modalidadForm"].value,
      interes: Array.from(formulario.elements["interesesForm"]).filter(cb => cb.checked).map(cb => cb.value),

      clave: formulario.elements["claveForm"].value,

      terminos: formulario.elements["terminosForm"].checked
    };

    // Valida que los campos no esten vacios
    let errores = [];
    Object.entries(datosUsuario).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length < 1 || value.length > 3) {
          errores.push(`Debes seleccionar entre 1 y 3 opciones en áreas de interes.`);
        };
      } else if (typeof value === "boolean") {
        if (value === false) {
          errores.push(`Debes aceptar los términos y condiciones.`);
        };
      } else if (typeof value === "string") {
        if (value.trim() === "") {
          errores.push(`El campo ${key} debe contener algun valor.`);
        };
      };
    });
    
    let mensaje = document.getElementById("contenedorMensaje");
    
    if (errores.length > 0) {
      mensaje.className = "p-4 bg-red-500 rounded-lg text-red-100";
      mensaje.innerHTML = errores.map(err => `<ul class="text-red-100">${err}</ul>`).join("");
      return;
    }

    let nombreRegex = /^[a-zA-ZñÑáÁéÉíÍóÓúÚ\s']+$/i; //Se arregla el \s, en el codigo original estaba asi /s
    let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let cedulaRegex = /^(?:[Vv]-?)?\d{6,8}$/
    let telefonoRegex = /^\+\d{9,15}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&\.])[A-Za-z\d@$!%*#?&\.]{8,50}$/;
    let direccionRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s#.,\-/°]{5,100}$/

    const fechaNac = new Date(datosUsuario.fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    if (!nombreRegex.test(datosUsuario.nombre.trim())) {
      errores.push("El nombre no cumple con lo solicitado.");
    };
    if (!nombreRegex.test(datosUsuario.apellido.trim())) {
      errores.push("El apellido no cumple con lo solicitado.");
    };
    if (!cedulaRegex.test(datosUsuario.cedula.trim())) {
      errores.push("La cédula no cumple con lo solicitado.");
    };
    if (!correoRegex.test(datosUsuario.correo.trim())) {
      errores.push("El correo no cumple con lo solicitado.");
    };
    if (!telefonoRegex.test(datosUsuario.telefono)) {
      errores.push("El número de teléfono no cumple con lo solicitado.");
    };
    if (!passwordRegex.test(datosUsuario.clave.trim())) {
      errores.push("La contraseña no cumple con lo solicitado.");
    };
    if (!direccionRegex.test(datosUsuario.direccion.trim())) {
      errores.push("La dirección debe contener al menos 5 caracteres.");
    };
    if (datosUsuario.clave != formulario.elements["validarForm"].value) {
      errores.push("Las contraseñas no son iguales.");
    };
    if (edad < 16) {
      errores.push("No tienes la suficiente edad para inscribirte.");
    };
    if (!nombreRegex.test(datosUsuario.ciudad.trim())) {
      errores.push("La ciudad no cumple con lo solicitado.");
    };

    if (errores.length > 0) {
      mensaje.className = "p-4 bg-red-500 rounded-lg text-red-100";
      mensaje.innerHTML = errores.map(err => `<ul class="text-red-100">${err}</ul>`).join("");
      return;
    }

    mensaje.className = "p-4 bg-green-500 rounded-lg text-green-100";
    mensaje.innerHTML = `<ul class="text-green-100">Se han enviado tus datos</ul>`;
    formulario.reset();
  });
});


