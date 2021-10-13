function validate(password) {
  return /(?=[a-zA-Z0-9]*$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
}
