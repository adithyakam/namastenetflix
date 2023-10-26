function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for general email format
  return re.test(email);
}
function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // Regex for password strength
  return re.test(password);
}

export const validation = (email, password) => {
  if (validateEmail(email)) {
    if (validatePassword(password)) {
      return null;
    } else {
      return "Password not valid";
    }
  } else {
    return "Email not valid";
  }
};
