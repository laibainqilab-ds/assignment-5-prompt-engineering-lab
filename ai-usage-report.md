# AI Usage Report

| Mission | AI Tool Used | Prompt Type | AI Helped With | AI Mistake | Manual Fix |
|---|---|---|---|---|---|
| Mission 1 | Claude Code | Prompt Improvement | Generated password strength checker approaches | Did not initially handle all invalid inputs | Added validation for null, undefined, and non-string values |
| Mission 2 | Claude Code | Constraint-Based Generation | Created reusable form validator structure | Some validation edge cases required improvement | Added additional input validation and reviewed returned errors |
| Mission 3 | Claude Code | Debugging Prompt | Identified discount percentage calculation bug | Did not initially validate invalid discount ranges | Added manual validation for invalid discount values |
| Mission 4 | Claude Code | Refactoring Prompt | Improved naming and code structure | Suggested changes that could affect original behavior | Applied only safe refactoring changes |
| Mission 5 | Claude Code | Code Review Prompt | Found readability and validation issues | Some suggestions were unnecessary for project scope | Selected and applied relevant improvements |
| Mission 6 | Claude Code | Documentation Prompt | Helped structure responsible AI policy | Required human review for accuracy | Updated policy manually according to requirements |

# Token Usage Tracking

| Mission | AI Tool | Input Tokens | Output Tokens | Total Tokens | Exact/Estimated | Token Efficiency Note |
|---|---|---:|---:|---:|---|---|
| Mission 1 | Claude Code | 500 | 800 | 1300 | Estimated | Used detailed prompts to reduce regeneration |
| Mission 2 | Claude Code | 600 | 900 | 1500 | Estimated | Added constraints before requesting code |
| Mission 3 | Claude Code | 450 | 700 | 1150 | Estimated | Provided expected and actual outputs |
| Mission 4 | Claude Code | 500 | 750 | 1250 | Estimated | Requested minimal behavior-preserving changes |
| Mission 5 | Claude Code | 600 | 850 | 1450 | Estimated | Asked for review instead of full rewrite |
| Mission 6 | Claude Code | 400 | 600 | 1000 | Estimated | Used structured documentation prompts |

## Final Total Tokens Used:
7650 (Estimated)

## Token Efficiency Reflection

I reduced unnecessary AI requests by writing detailed prompts with role, task, constraints, expected output format, and edge cases. I manually verified every AI suggestion instead of regenerating code repeatedly.
