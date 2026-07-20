# Mission 6: Responsible AI Usage

## Prompt

```text
Role:
Act as a senior software engineer writing internal policy.

Task:
Write a responsible AI usage policy for a developer using AI coding
assistants (Claude, Copilot, Cursor, Codex) day-to-day.

Context:
This policy will be added to the repository as
responsible-ai-policy.md, alongside code that was itself built with
AI assistance during this assignment, so it needs to be practical
and specific rather than generic.

Constraints:
- Plain Markdown, no external tools/services referenced.
- Must be beginner-friendly but professional in tone.
- Must give concrete examples, not just abstract rules.

Output Format:
1. Numbered policy sections
2. Concrete "do / do not" examples where relevant

Required Topics (must all be covered):
- What is acceptable AI usage
- Privacy and personal data
- API keys, secrets, and .env files
- Company/client data
- Blind copying of AI output
- How to verify AI output before committing it
- Honest disclosure of AI assistance
- AI-assisted vs AI-dependent development

Verification:
Explain how a developer would self-check whether they are following
this policy day to day.
```

## AI Output

Claude generated a 10-section policy (`responsible-ai-policy.md`)
covering: purpose, acceptable usage, information that must never be
shared with AI tools, API keys/`.env` handling with a concrete
correct/incorrect example, company data privacy, avoiding blind
copying, a numbered AI output verification process, honest AI
disclosure requirements, and a dedicated section distinguishing
AI-assisted from AI-dependent development.

## What AI Generated Correctly

- Covered every required topic from the prompt without needing a
  follow-up prompt.
- Included a concrete before/after example for API keys
  (`API_KEY=123456789abcdef` vs `API_KEY=<stored-securely>`) instead
  of just saying "don't share secrets."
- The AI-assisted vs AI-dependent distinction (Section 9) was more
  precise than what was originally asked for - it lists exactly
  which responsibilities (requirements, code decisions, testing,
  security, final approval) stay with the developer either way.

## What Needed Manual Review

- The first draft's "Honest AI Disclosure" section only mentioned
  documenting the tool used. It was manually expanded to also
  require documenting the *prompt approach*, *problems found in AI
  output*, and *manual corrections made* - matching what this
  repository's own `ai-usage-report.md` actually tracks per mission,
  so the policy reflects the practice used elsewhere in this repo
  rather than being generic.
- Verified none of the "do not share" examples in Section 3
  accidentally included anything that looked like a real credential
  or real company name before committing the file.

## Manual Verification

Read the full policy against the assignment's required topic list
(privacy, API keys, `.env` files, company data, blind copying,
honest AI disclosure) and confirmed all six are present as their own
sections or sub-points, not just mentioned in passing.

## Verification: how to self-check against this policy day to day

1. Before pasting anything into an AI tool, ask: "would I be okay
   with this text being logged by a third party?" If not, redact it
   or use dummy data first (Sections 3-5).
2. Before committing AI-generated code, run it against real inputs
   yourself rather than trusting the AI's own claimed test cases
   (Section 7) - this is exactly what `tests/manual-test-cases.md`
   in this repository does for each mission.
3. Before opening a PR, check the PR description honestly states
   which AI tool was used and what was manually changed (Section 8)
   - this repository's PR template enforces that same check.
