# Project Context

## Project Name
<!-- Replace with your project name -->
SafeVibe — Multi-Agent Verifiable-by-Design Execution Layer

## Tech Stack
- Language: TypeScript / Node.js 20
- Framework: LangGraph (multi-agent orchestration)
- Build: esbuild + electron-builder
- Testing: Jest

## Architecture Overview
Multi-agent pipeline: Architect → Coder → Critic → Verifier (Adversarial Swarm)
Or: Partner A ↔ Partner B → Consensus Auditor (Round Table mode)

## Current Phase
Phase 2 — Implementation (as of 2026-Q3)

## Key Conventions
- All source files live in `src/` or `engine/src/`
- Use async/await everywhere, no callbacks
- Every public function needs a JSDoc comment
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`)

## Important Files
- `engine/src/LangGraphOrchestrator.ts` — core multi-agent graph
- `src/main.js` — Electron main process
- `renderer/chat.js` — UI logic
