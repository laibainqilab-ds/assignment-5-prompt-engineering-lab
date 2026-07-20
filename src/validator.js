function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}


function validateForm(formData) {

  if (!formData || typeof formData !== 'object') {
    return {
      isValid: false,
      errors: {
        formData: 'Invalid form data provided.'
      }
    };
  }

  const {
    name = '',
    email = '',
    phone = '',
    password = '',
    confirmPassword = ''
  } = formData;

  const errors = {};

  // ---- Name ----
  if (typeof name !== 'string' || name.trim() === '') {
    errors.name = 'Name is required.';
  }

  // ---- Email ----
  if (typeof email !== 'string' || email.trim() === '') {
    errors.email = 'Email is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email format is invalid.';
  }

  // ---- Phone ----
  const phoneRegex = /^\d{10,15}$/;

  if (typeof phone !== 'string' || phone.trim() === '') {
    errors.phone = 'Phone number is required.';
  } else if (!phoneRegex.test(phone.trim())) {
    errors.phone =
      'Phone number must contain only digits and be 10-15 digits long.';
  }

  // ---- Password ----
  const isPasswordEmpty =
    typeof password !== 'string' || password.trim() === '';

  if (isPasswordEmpty) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  // ---- Confirm Password ----
  if (typeof confirmPassword !== 'string' || confirmPassword.length === 0) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}


// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = validateForm;
}

if (typeof window !== 'undefined') {
  window.validateForm = validateForm;
}