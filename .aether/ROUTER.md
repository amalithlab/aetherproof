# AETHER Intent Routing Rules
# Place this file at ~/.aether/ROUTER.md (global) or .aether/ROUTER.md (project-level)
# The AETHER intent gate reads these rules and injects them into the LLM classifier.

## Always treat as CHAT (never start swarm):
- Any message that starts with "I think..." or "I was thinking..."
- Any message that starts with "What do you think about..."
- Any message asking for my opinion or advice without requesting action
- Any message that is a question about a concept, not a command
- Any message under 8 words that is not a direct imperative command

## Always treat as WORK (always start swarm):
- Any message containing "NSF proposal" or "grant proposal"
- Any message containing "write a paper" or "draft a paper"
- Any message explicitly saying "implement", "build", "create", "fix", "generate"
