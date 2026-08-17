# Code Style Guide
# Place at .aether/STYLE.md (project-specific coding style)
# The Coder agent reads these rules before writing any code.

## General
- Use 2-space indentation (no tabs).
- Maximum line length: 120 characters.
- Always use `const` and `let` — never `var`.
- Prefer arrow functions for callbacks.
- Use template literals instead of string concatenation.

## TypeScript Specific
- Explicit return types on all public functions.
- Use `interface` for object shapes, `type` for unions/aliases.
- Avoid `enum` — use `const` objects with `as const`.

## File Organization
- One class/interface per file when possible.
- Group imports: external packages first, then internal imports, then types.
- Sort imports alphabetically within each group.

## Comments
- Every exported function must have a JSDoc comment.
- Inline comments explain WHY, not WHAT.
