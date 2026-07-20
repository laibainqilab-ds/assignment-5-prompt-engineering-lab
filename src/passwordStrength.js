function checkPasswordStrength(password) {
  // Handle missing or invalid input safely
  if (!password || typeof password !== "string") {
    return "Weak";
  }

  const minLength = 8;

  const hasMinLength = password.length >= minLength;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  // Count how many character-type rules are satisfied
  const passedChecks = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar]
    .filter(Boolean).length;

  // Too short, or fails almost every rule
  if (!hasMinLength || passedChecks <= 1) {
    return "Weak";
  }

  // Meets length, and covers some but not all character types
  if (passedChecks >= 2 && passedChecks <= 3) {
    return "Medium";
  }

  // Meets length, and covers every character type
  return "Strong";
}
