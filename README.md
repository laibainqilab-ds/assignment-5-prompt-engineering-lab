# Assignment 5 - Prompt Engineering Battle Lab

## Objective

This repository demonstrates AI-assisted development using professional prompting, AI output verification, manual testing, and GitHub workflow practices.

The goal of this assignment is to use AI as an engineering assistant while maintaining developer control through proper prompts, verification, documentation, and responsible AI usage.

## AI Tools Used

- Cursor
- Claude/Copilot (if used)

## Missions Completed

1. Password Strength Checker
2. Form Validator
3. Discount Calculator Debugging
4. Text Analyzer Refactoring
5. AI Code Review
6. Responsible AI Policy

## Git Workflow

The project follows the required GitHub workflow:

```
Issue → Branch → Commit(s) → Pull Request → Review → Merge → Issue Closed
```

No direct development commits were made to the main branch. Each mission was completed through separate branches and pull requests.

## Prompting Techniques Used

The following prompt engineering techniques were applied:

- Role prompting
- Context-based prompting
- Constraint-based prompting
- Output format specification
- Edge case handling
- Verification-focused prompts

Professional prompts included:

- Role definition
- Clear tasks
- Development context
- Coding constraints
- Expected output format
- Manual verification requirements

## Project Structure

```
assignment-5-prompt-engineering-lab/

├── README.md
├── ai-usage-report.md
├── responsible-ai-policy.md
├── prompts/
├── src/
├── tests/
├── screenshots/
└── .github/
```

## How to Run

Make sure Node.js is installed.

Run the JavaScript files:

```bash
node src/passwordStrength.js
node src/validator.js
node src/discountCalculator.js
node src/textAnalyzer.js
```

## Testing

All functions were manually tested using valid and invalid inputs.

Manual test cases include:

- Test input
- Expected output
- Actual output
- Final PASS/FAIL status

Testing documentation is available at:

```
tests/manual-test-cases.md
```

## AI Verification

AI-generated suggestions were not accepted blindly.

Each AI output was:

- Reviewed manually
- Tested against expected behavior
- Corrected where necessary
- Improved before merging

Examples of manual verification included:

- Checking edge cases
- Validating generated logic
- Removing unnecessary AI suggestions
- Confirming original functionality was maintained

## AI Usage Documentation

AI usage details are documented in:

```
ai-usage-report.md
```

The report contains:

- AI tools used
- Prompt types
- AI assistance provided
- AI mistakes identified
- Manual corrections applied
- Estimated token usage
- Token efficiency reflection

## Responsible AI Usage

Responsible AI practices are documented in:

```
responsible-ai-policy.md
```

The policy covers:

- Protecting private information
- Avoiding sharing API keys and secrets
- Not sharing company-sensitive data
- Avoiding blind AI copying
- Verifying AI-generated output
- Honest disclosure of AI assistance
## AI Verification Examples

During the assignment, AI suggestions were reviewed and verified manually.

Examples:

### Mission 3 - Debugging
- AI helped identify the discount calculation issue.
- Manual testing revealed missing validation for invalid discount values.
- The final implementation added proper input validation.

### Mission 4 - Refactoring
- AI improved naming and code structure.
- Generated changes were reviewed to ensure original behavior was preserved.

### Mission 5 - Code Review
- AI identified readability and validation improvements.
- Only relevant suggestions were applied after manual review.

AI was used as a development assistant while final decisions remained with the developer.

## Learning Summary

This assignment improved my understanding of AI-assisted software development.

Key lessons learned:

- Good prompts produce better AI results.
- AI should assist development, not replace developer decision-making.
- Context, constraints, and verification improve AI output quality.
- Manual testing is necessary before accepting AI-generated code.
- Developers are responsible for understanding and explaining their final work.