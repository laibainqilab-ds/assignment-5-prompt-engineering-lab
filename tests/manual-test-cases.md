# Manual Test Cases

| Test Case | Input | Expected Output | Actual Output | Status |
|-----------|-------|-----------------|---------------|--------|
| Empty password | `""` | Weak | Weak | ✅ Pass |
| Short password | `"abc"` | Weak | Weak | ✅ Pass |
| Lowercase only | `"abcdefgh"` | Weak | Weak | ✅ Pass |
| Strong password | `"Password123!"` | Strong | Strong | ✅ Pass |
| Null input | `null` | Weak | Weak | ✅ Pass |

## Verification

The password strength checker was manually tested using Node.js. The actual outputs matched the expected outputs for all test cases, including edge cases such as an empty string and null input.

---

## Mission 2: Form Validator (`src/validator.js`)

| Test Case | Input | Expected Output | Actual Output | Status |
|-----------|-------|-----------------|---------------|--------|
| All fields valid | `{name:"Jane Doe", email:"jane@example.com", phone:"03001234567", password:"Passw0rd!", confirmPassword:"Passw0rd!"}` | `isValid: true, errors: {}` | `isValid: true, errors: {}` | ✅ Pass |
| All fields empty | `{name:"", email:"", phone:"", password:"", confirmPassword:""}` | one error per field | one error per field | ✅ Pass |
| Invalid email format | `email:"not-an-email"` (rest valid) | `errors.email: "Email format is invalid."` | `errors.email: "Email format is invalid."` | ✅ Pass |
| Invalid phone format | `phone:"abc123"` (rest valid) | `errors.phone: "Phone number must contain only digits and be 10-15 digits long."` | same | ✅ Pass |
| Short password | `password:"123", confirmPassword:"123"` (rest valid) | `errors.password: "Password must be at least 8 characters long."` | same | ✅ Pass |
| Confirm password mismatch | `password:"Passw0rd!", confirmPassword:"Different1!"` (rest valid) | `errors.confirmPassword: "Passwords do not match."` | same | ✅ Pass |
| `formData` is `null` | `null` | `errors.formData: "Invalid form data provided."` | same | ✅ Pass |

### Verification
Tested by calling `require('./src/validator.js')` from a Node script and comparing the returned `{ isValid, errors }` object against the expected result for each case above. No DOM was involved, confirming the function stays UI-independent as required.

---

## Mission 3: Discount Calculator (`src/discountCalculator.js`)

| Test Case | Input | Expected Output | Actual Output | Status |
|-----------|-------|-----------------|---------------|--------|
| Standard discount | `calculateDiscount(100, 20)` | `80` | `80` | ✅ Pass |
| Different price/discount | `calculateDiscount(250, 10)` | `225` | `225` | ✅ Pass |
| Larger discount | `calculateDiscount(500, 50)` | `250` | `250` | ✅ Pass |

### Verification
The original bug treated `discount` as a raw multiplier instead of a percentage (`calculateDiscount(100, 20)` returned `-1900`). After the fix (`discount / 100`), all three cases above were re-run with Node and matched expected values. See `prompts/03-debugging-prompts.md` for the full debugging trace.

---

## Mission 4: Text Analyzer (`src/textAnalyzer.js`)

| Test Case | Input | Expected Output | Actual Output | Status |
|-----------|-------|-----------------|---------------|--------|
| Two words | `analyze("Hello world")` | `2` | `2` | ✅ Pass |
| Multiple spaces between words | `analyze("Hello   world")` | `2` | `2` | ✅ Pass |
| Three words | `analyze("One two three")` | `3` | `3` | ✅ Pass |
| Empty string | `analyze("")` | `0` | `0` | ✅ Pass |

### Verification
Ran each case through the refactored `filter()`-based implementation with Node and confirmed the output count matches the original loop-based version's behavior exactly (no behavior change from the refactor). See `prompts/04-refactoring-prompts.md` for the before/after code.