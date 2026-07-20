# Mission 2: Constraint-Based Code Generation

## Prompt

```text
Role:
Act as a senior JavaScript mentor.

Task:
Create a reusable JavaScript form validator.

Context:
The function will be used to validate a signup form before it is
submitted, covering: name, email, phone, password, and confirm
password.

Constraints:
- Plain JavaScript only, no external libraries.
- Must NOT touch or query the DOM directly - it only receives a
  plain object of form values and returns a result.
- Must return a structured result object, not throw errors or
  use alert()/console.log() for validation failures.
- Reusable in both Node and the browser.

Output Format:
1. JavaScript code
2. Explanation
3. Manual test cases

Edge Cases:
- Empty fields
- Invalid email format
- Invalid phone format
- Password shorter than 8 characters
- Confirm password not matching password
- formData itself missing, null, or not an object

Verification:
Explain how to manually test the function.
```

## AI Output

```javascript
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

  if (typeof name !== 'string' || name.trim() === '') {
    errors.name = 'Name is required.';
  }

  if (typeof email !== 'string' || email.trim() === '') {
    errors.email = 'Email is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email format is invalid.';
  }

  const phoneRegex = /^\d{10,15}$/;
  if (typeof phone !== 'string' || phone.trim() === '') {
    errors.phone = 'Phone number is required.';
  } else if (!phoneRegex.test(phone.trim())) {
    errors.phone = 'Phone number must contain only digits and be 10-15 digits long.';
  }

  const isPasswordEmpty = typeof password !== 'string' || password.trim() === '';
  if (isPasswordEmpty) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = validateForm;
}

if (typeof window !== 'undefined') {
  window.validateForm = validateForm;
}
```

## Explanation

`validateForm` never touches the DOM - it takes a plain `formData`
object and returns `{ isValid, errors }`, so the same function works
whether it is called from a Node test script or from a browser form
handler that reads `input.value` itself and passes the values in.

Each field is checked independently and collected into a single
`errors` object keyed by field name, instead of stopping at the
first failure - this lets a UI show every problem at once instead of
one error per submit attempt. `isValidEmail` and the phone regex are
kept simple and readable rather than "fully RFC-compliant," which
matches the beginner-friendly constraint.

## Edge Cases Handled

- `formData` missing, `null`, or not an object -> a single
  top-level `formData` error instead of a crash.
- Every field empty -> every field gets its own "required" error.
- Invalid email format -> caught only after the empty check passes.
- Invalid phone format -> only digits, 10-15 characters.
- Password under 8 characters -> rejected with a specific message.
- `confirmPassword` not matching `password` -> rejected even if both
  individually look valid.

## Manual Test Cases

```javascript
const validateForm = require('./validator.js');

console.log(validateForm({
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '03001234567',
  password: 'Passw0rd!',
  confirmPassword: 'Passw0rd!'
}));
// { isValid: true, errors: {} }

console.log(validateForm({
  name: '', email: '', phone: '', password: '', confirmPassword: ''
}));
// isValid: false, one error per field

console.log(validateForm({
  name: 'Jane', email: 'not-an-email', phone: '03001234567',
  password: 'Passw0rd!', confirmPassword: 'Passw0rd!'
}));
// errors.email: "Email format is invalid."

console.log(validateForm({
  name: 'Jane', email: 'jane@example.com', phone: 'abc123',
  password: 'Passw0rd!', confirmPassword: 'Passw0rd!'
}));
// errors.phone: "Phone number must contain only digits and be 10-15 digits long."

console.log(validateForm({
  name: 'Jane', email: 'jane@example.com', phone: '03001234567',
  password: '123', confirmPassword: '123'
}));
// errors.password: "Password must be at least 8 characters long."

console.log(validateForm({
  name: 'Jane', email: 'jane@example.com', phone: '03001234567',
  password: 'Passw0rd!', confirmPassword: 'Different1!'
}));
// errors.confirmPassword: "Passwords do not match."

console.log(validateForm(null));
// errors.formData: "Invalid form data provided."
```

All outputs above were run against `src/validator.js` with Node and
matched the comments exactly.

## Verification: how to test this manually

1. `require('./src/validator.js')` from a throwaway Node script (or
   the browser console via `window.validateForm`).
2. Call it once per edge case above and compare the printed
   `errors` object against what you expect for that field.
3. Confirm `isValid` is only `true` when `errors` is an empty
   object - a common beginner bug is checking `errors` truthiness
   instead of its key count.
4. Confirm the function never throws, even when `formData` is
   `null`/`undefined`/not an object - that's what the top-level
   guard clause is for.

## Why this prompt is better than an unconstrained one

- Explicitly rules out DOM manipulation, so the AI didn't generate
  `document.getElementById(...)` calls that would only work wired
  into a specific HTML form.
- Requiring a structured `{ isValid, errors }` return value instead
  of `alert()`/`console.log()` makes the function testable and
  reusable in both Node and the browser.
- Naming every edge case up front meant the first AI output already
  handled `null` `formData` and empty-field cases, instead of those
  being discovered later through manual testing.
