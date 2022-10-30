export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Ingresa un nombre de usuario';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Ingresa una cuenta de Email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Cuenta de Email invalida';
    }
    if (!values.password) {
      errors.password = 'Se requiere una contraseña';
    } else if (values.password.length < 6) {
      errors.password = 'La contraseña necesita tener 6 o más caracteres';
    }
  
    if (!values.password2) {
      errors.password2 = 'Confirma tu contraseña';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Las contraseñas no coinciden';
    }
    return errors;
  }