function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function validatePhoneNumber(phone) {
  return /^\d{10}$/.test(phone);
}

function validateAddress(address) {
  return address.trim().length > 0;
}

function validateName(name) {
  return name.trim().length > 0;
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function validateDateOfBirth(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  return !isNaN(dob.getTime());
}

function validateFileExtension(fileName, allowedExtensions) {
  const fileExtension = fileName.split(".").pop();
  return allowedExtensions.includes(fileExtension);
}

function validateFileSize(fileSize, maxSize) {
  return fileSize <= maxSize;
}

function validateCheckboxSelection(checkboxValues) {
  return checkboxValues.length > 0;
}

function validateDropdownSelection(selectedOption) {
  return selectedOption !== "";
}

function validateURL(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}

module.exports = {
  validateEmail,
  validatePhoneNumber,
  validateAddress,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateDateOfBirth,
  validateFileExtension,
  validateFileSize,
  validateCheckboxSelection,
  validateDropdownSelection,
  validateURL,
};
