# Verifier Policy Constraints
# Place at .aether/CONSTRAINTS.md (project-specific security/policy rules)
# The Verifier agent reads these before reviewing code.

## Security Requirements
- All API endpoints must have authentication middleware — reject if missing.
- No hardcoded secrets, API keys, or passwords in source files.
- SQL queries must use parameterized statements — reject raw string concatenation.
- All user inputs must be sanitized before use.

## Quality Gates
- TypeScript: no `any` types unless explicitly annotated with a comment explaining why.
- All async functions must have proper error handling (try/catch or .catch()).
- No `console.log` in production code — use proper logging.

## Compliance
- All research outputs must cite sources with full bibliographic information.
- LaTeX documents must compile without errors using pdflatex.
