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