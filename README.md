
Form Validator is a lightweight npm package that provides various form validation functions to simplify form validation in JavaScript applications.

## Installation

You can install the package via npm:

```shell
npm install @namopanda/form-validator
Usage
Import the desired form validation functions from the package and use them in your JavaScript code.

javascript
Copy code
const {
  validateEmail,
  validatePhoneNumber,
  validateAddress,
  validateName,
  validatePassword,
} = require('form-validator');

// Example usage
const email = 'test@example.com';
if (validateEmail(email)) {
  console.log('Email is valid.');
} else {
  console.log('Email is invalid.');
}

const phoneNumber = '1234567890';
if (validatePhoneNumber(phoneNumber)) {
  console.log('Phone number is valid.');
} else {
  console.log('Phone number is invalid.');
}

// Additional validation functions can be used similarly
Available Validation Functions
The following form validation functions are available in this package:

validateEmail(email): Validates an email address.
validatePhoneNumber(phone): Validates a phone number.
validateAddress(address): Validates an address.
validateName(name): Validates a name.
validatePassword(password): Validates a password.
Please refer to the function descriptions in the source code for more details on their usage and return values.

Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

To contribute to the project, you can follow these steps:

Fork the repository
Create a new branch
Make your changes
Commit your changes
Push your changes to your forked repository
Submit a pull request
License
This project is licensed under the MIT License. See the LICENSE file for details.