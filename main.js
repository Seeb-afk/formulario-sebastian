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



