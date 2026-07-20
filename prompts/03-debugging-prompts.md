# Mission 3: Debugging with AI

## Prompt

```text
Role:
Act as a senior JavaScript debugging mentor.

Task:
Debug the following JavaScript function with the smallest possible change.

Context:
This function calculates a discounted price.

Broken Code:

function calculateDiscount(price, discount) {
  return price - price * discount;
}

Test Input:
price = 100
discount = 20

Expected Output:
80

Actual Output:
-1900

Constraints:
- Plain JavaScript only.
- Make the smallest possible fix.
- Explain the bug.
- Do not rewrite the entire function.

Output Format:
1. Corrected code
2. Explanation
3. Manual test cases
```

## AI Output

```javascript
function calculateDiscount(price, discount) {
  return price - price * (discount / 100);
}
```

## Explanation

The function assumes discount is already a decimal fraction (like 0.2 for 20%), but the test passes discount = 20 as a whole-number percentage.

So the original code computed:

100 - 100 * 20 = 100 - 2000 = -1900

The smallest fix is to convert the percentage into a fraction before applying it, by dividing discount by 100:

100 - 100 * (20 / 100) = 100 - 20 = 80

## AI Mistake

The original function multiplied the price by the whole-number discount instead of treating the discount as a percentage. This caused incorrect negative values for common inputs.

## Manual Correction

Reviewed the corrected code, verified that the discount was converted to a percentage correctly, and manually tested the function using multiple inputs to confirm accurate calculations.

## Manual Test Cases

```javascript
console.log(calculateDiscount(100, 20));
// Expected: 80

console.log(calculateDiscount(250, 10));
// Expected: 225

console.log(calculateDiscount(500, 50));
// Expected: 250
```