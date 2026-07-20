# Mission 1: Bad Prompt vs Professional Prompt

## Bad Prompt

### Prompt

```text
Create a JavaScript password strength checker.
```

### AI Output

Claude generated an interactive password strength checker with a live strength meter and rule checklist instead of a reusable JavaScript function.

Claude's response:

> "Here's a live password strength checker — type in it to see the strength meter and rule checklist update in real time. It checks for length (8+ and 12+ chars), uppercase, lowercase, numbers, and symbols, and flags a few common weak passwords outright."

(If Claude also generated HTML/CSS/JavaScript code for the demo, paste that code below.)

### What was wrong?

- The prompt was too vague.
- It did not specify that only a reusable JavaScript function was required.
- Claude assumed an interactive webpage was acceptable.
- There were no constraints, output format, or edge cases.

## Better Prompt

### Prompt

```text
Create a JavaScript password strength checker.

Requirements:
- Check minimum length of 8 characters.
- Check uppercase letters.
- Check lowercase letters.
- Check numbers.
- Check special characters.
- Return "Weak", "Medium", or "Strong".
- Write clean, reusable JavaScript.
```

### AI Output
function checkPasswordStrength(password) {
  const minLength = 8;

  const hasMinLength = password.length >= minLength;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  const passedChecks = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar]
    .filter(Boolean).length;

  if (!hasMinLength || passedChecks <= 1) {
    return "Weak";
  }

  if (passedChecks >= 2 && passedChecks <= 3) {
    return "Medium";
  }

  return "Strong";
}

### Improvements

- Added clear requirements.
- Specified expected output.
- Requested reusable JavaScript code.
- Reduced ambiguity compared to the bad prompt.

## Professional Prompt

### Prompt

```text
Role:
Act as a senior JavaScript mentor.

Task:
Create a reusable password strength checker.

Context:
The function will be used in a beginner JavaScript project.

Constraints:
- Plain JavaScript only
- No external libraries
- No DOM manipulation
- Reusable and beginner-friendly

Output Format:
1. JavaScript code
2. Explanation
3. Manual test cases

Edge Cases:
- Empty password
- Null or undefined
- Password shorter than 8 characters

Verification:
Explain how to manually test the function.
```

### AI Output
## 1. JavaScript code

```javascript
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
```

## 2. Explanation

For a beginner, it helps to think of this function in two stages:

**Stage 1 — safety check.** Before doing any real work, the function checks whether `password` is missing (`null`/`undefined`) or not a string at all. If so, it immediately returns `"Weak"` instead of crashing on `.length` or `.test()`. This is a habit worth building early: always ask "what if the input isn't what I expect?"

**Stage 2 — rule counting.** Once we know we have a real string, the function checks five things:
- Is it at least 8 characters long?
- Does it contain an uppercase letter, lowercase letter, number, and special character?

Each of the four character-type checks uses a regular expression with `.test()`, which returns `true` or `false`. Putting those four booleans in an array and using `.filter(Boolean)` is a clean, reusable trick to count how many are `true` — you'll see this pattern often in real codebases.

Finally, the function combines length and the count into a simple decision: too short or barely varied → `"Weak"`; long enough with some variety → `"Medium"`; long enough with all four character types → `"Strong"`.

## 3. Manual test cases

```javascript
console.log(checkPasswordStrength("abc"));            // "Weak" - too short
console.log(checkPasswordStrength("abcdefgh"));        // "Weak" - only lowercase
console.log(checkPasswordStrength("abcdefgH"));        // "Medium" - lower + upper
console.log(checkPasswordStrength("abcdefgH1"));       // "Medium" - lower + upper + number
console.log(checkPasswordStrength("abcdefgH1!"));      // "Strong" - all 4 types
console.log(checkPasswordStrength(""));                // "Weak" - empty string
console.log(checkPasswordStrength(null));              // "Weak" - null input
console.log(checkPasswordStrength(undefined));         // "Weak" - undefined input
console.log(checkPasswordStrength(12345678));          // "Weak" - not a string
```

## Verification: how to test this manually

1. **Copy the function** into a `.js` file (e.g. `passwordChecker.js`) or paste it directly into your browser's DevTools console.
2. **Call it with different inputs**, one at a time, wrapped in `console.log(...)` so you can see the return value — the test cases above are a good starting set.
3. **Check each result against your expectation.** For example, `"abcdefgH1!"` has 10 characters and all four character types, so it should print `"Strong"`. If it doesn't, that tells you exactly which rule to inspect.
4. **Try the edge cases specifically**: run it with `""`, `null`, and `undefined` to confirm it returns `"Weak"` instead of throwing an error — this is the part beginners most often forget to test.
5. **Try boundary lengths**, like a 7-character and an 8-character password with the same character variety, to confirm the length check is working exactly where you expect (`>= 8`, not `> 8`).

Once each printed result matches what you predicted on paper, you can be confident the function behaves correctly.

### Why this prompt is better

- Clearly defines the AI's role.
- Explains the task and context.
- Adds constraints to avoid unwanted output.
- Specifies the output format.
- Includes edge cases.
- Requests manual verification.