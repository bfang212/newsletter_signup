const validateField = (fieldName, value) => {
  if (fieldName === 'email') {
    return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false
  }
  if (fieldName === 'name') {
    return value.match(/^[A-Za-z ]{1,32}/) ? true : false
  }
  return true;
}

exports.validateField = validateField;