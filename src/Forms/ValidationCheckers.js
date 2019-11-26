const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors, state) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  Object.values(state).forEach(
    (val) => {
      // console.log(val, 'kldnwj' ,val.length <= 0);
      return val.length <= 0 && (valid = false)
    }
  );
  return valid;
}

const validation = {
  validEmailRegex,
  validateForm
}
export default validation;
