# AETHER IDE — Programmable Multi-Agent AI Engineering Environment

**Owned by Amalith LLC | Developed by Amalith Lab**

> **Academic Foundation:** Based on the research paper [From Vibe to Veracity: A Chain-of-Thought Framework for AI-Driven Software Engineering and Security](https://webpages.charlotte.edu/yonwang/papers/vibeCoding.pdf).

AETHER IDE is an autonomous multi-agent AI engineering desktop application for **macOS**, **Windows**, and **Linux**. It uses a **dynamic LangGraph-based agent graph** with a programmable `.aether/` configuration layer, allowing you to control agent behavior, routing, persona, and constraints entirely through markdown files — no code changes required.

---

## 📥 Installation & Downloads

Download pre-built binaries from the **[Latest Release](https://github.com/amalithlab/aetherproof/releases/tag/latest-dev)**:

| Platform | File | Notes |
|:---|:---|:---|
| **macOS Apple Silicon** | `Aether-1.0.0-arm64.dmg` | M1/M2/M3/M4 |
| **macOS Intel** | `Aether-1.0.0.dmg` | x64 |
| **Windows x64** | `Aether Setup 1.0.0.exe` | NSIS installer |
| **Linux x64** | `Aether-1.0.0.AppImage` | Universal |
| **Linux x64** | `aether_1.0.0_amd64.deb` | Debian/Ubuntu |

### Platform Notes
- **macOS**: If blocked by Gatekeeper, right-click → Open, then confirm.
- **Windows**: Windows Defender may warn about unsigned executables — click "More info → Run anyway".
- **Linux AppImage**: `chmod +x Aether-1.0.0.AppImage && ./Aether-1.0.0.AppImage`

---

## 🚀 Quick Start (First 5 Minutes)

1. **Launch AETHER** — the app opens with the Round Table Swarm mode active.
2. **Set your Workspace** — click ⚙️ Settings → **Current Working Workspace** → **Change...** → select your project folder.
3. **Configure a Provider** — under **Provider Registry**, enter your LLM API key (DeepSeek, OpenAI, Google Gemini, or Anthropic) and click **Verify Connection**.
4. **Type your task** — e.g., `"Draft an NSF SaTC proposal on AI code security"` and press Enter.
5. The agent swarm will immediately begin researching and writing.

> **Tip:** For conversational questions like *"what do you think?"* or *"are you done?"*, AETHER detects these as chat messages and responds directly — without launching the full swarm. This is controlled by the intent gate described below.

---

## 🧠 Swarm Modes

| Mode | Agents | Best For |
|:---|:---|:---|
| **Round Table Swarm** *(default)* | Partner A + Partner B + Consensus Auditor | Research, proposals, complex synthesis |
| **Adversarial Swarm** | Architect + Coder + Critic + Verifier | Software development, code generation |
| **Solo Agent** | Single agent | Quick tasks, simple queries |

### Swarm Types (within any mode)

| Type | Description |
|:---|:---|
| **Document Synthesis** *(default)* | Academic papers, grant proposals, reports |
| **Software Development** | Code generation, debugging, refactoring |
| **Business Process Automation** | Workflow automation, scheduling |
| **Environment Diagnostics** | System health checks, debugging |

---

## 📁 The `.aether/` Programmable Configuration Layer

AETHER reads user-authored markdown files from two locations and injects them into the appropriate agent pipeline stages at runtime — **no code changes needed**.

```
~/.aether/                 ← Global (applies to ALL projects)
  user.md                  ← Hard constraints for every agent
  PERSONA.md               ← How the Responder agent communicates
  ROUTER.md                ← Custom CHAT vs. WORK classification rules

<your-project>/.aether/   ← Project-local (overrides/extends global)
  PROJECT.md               ← Project context, tech stack, current phase
  INTENT_RULES.md          ← Project-specific routing rules
  CONSTRAINTS.md           ← Security/policy constraints for the Verifier
  STYLE.md                 ← Code style guide for the Coder
  skills/                  ← Project-specific skills
    my-skill/
      SKILL.md
```

> **Priority:** Project-local files are **appended after** global files, so they extend (not replace) global config.

---

### `PROJECT.md` — Instant Project Context for All Agents

**Location:** `.aether/PROJECT.md` in your project folder  
**Injected into:** Architect agent + Coder agent + Responder agent

This is the most impactful file. Agents start every session knowing your tech stack, architecture, and current phase — without exploring the filesystem first.

```markdown
# Project Context

## Project Name
SafeVibe — Multi-Agent Verifiable-by-Design Execution Layer

## Tech Stack
- Language: TypeScript / Node.js 20
- Framework: LangGraph
- Testing: Jest

## Current Phase
Phase 2 — Implementation

## Key Conventions
- Use async/await, never callbacks
- Conventional Commits (feat:, fix:, docs:)
- All public functions need JSDoc comments
```

---

### `ROUTER.md` / `INTENT_RULES.md` — Custom Intent Classification

**Location:** `~/.aether/ROUTER.md` (global) or `.aether/INTENT_RULES.md` (project)  
**Injected into:** The LLM Intent Gate (first step before any swarm runs)

AETHER uses a two-tier intent gate to decide if your message is **CHAT** (conversational → direct reply) or **WORK** (task → swarm pipeline). You can extend this gate with your own rules:

```markdown
# AETHER Routing Rules

## Always treat as CHAT (respond directly, skip swarm):
- Any message starting with "I think..." or "I was thinking..."
- Any message asking "what do you think?" or "what is your opinion?"
- Any message under 8 words that is not a direct imperative

## Always treat as WORK (always run the swarm):
- Any message containing "NSF proposal" or "grant proposal"
- Any message explicitly saying "implement", "build", "create", "fix"
```

**Example behavior:**
- *"I think we should use Redis instead of Memcached"* → **CHAT** → instant conversational reply
- *"Build a Redis-backed caching layer"* → **WORK** → full swarm execution

---

### `PERSONA.md` — Responder Agent Communication Style

**Location:** `~/.aether/PERSONA.md`  
**Injected into:** Responder agent system prompt

```markdown
# Agent Persona

## Communication Style
- Be concise and direct. No unnecessary filler phrases.
- Use technical language appropriate for a senior software engineer.
- Do not use excessive bullet points — prefer prose for explanations.

## Tone
- Professional but conversational.
- Do not address me as "Great question!" or similar.
```

---

### `CONSTRAINTS.md` — Verifier Policy Rules

**Location:** `.aether/CONSTRAINTS.md`  
**Injected into:** Verifier agent system prompt

```markdown
# Verification Constraints

## Security Requirements
- All API endpoints must have authentication middleware.
- No hardcoded secrets or API keys in source files.
- SQL queries must use parameterized statements.

## Quality Gates
- TypeScript: no `any` types without an explanatory comment.
- All async functions must have try/catch error handling.
```

---

### `STYLE.md` — Coder Style Guide

**Location:** `.aether/STYLE.md`  
**Injected into:** Coder agent system prompt

```markdown
# Code Style

- 2-space indentation, no tabs.
- Maximum line length: 120 characters.
- Use `const`/`let` — never `var`.
- Arrow functions for callbacks.
- Template literals instead of string concatenation.
```

---

### `user.md` — Global Hard Constraints

**Location:** `~/.aether/user.md`  
**Injected into:** Every agent's system prompt

Use this for absolute, non-negotiable rules that apply regardless of mode or task type:

```markdown
# User Constraints

- Never delete files without explicit confirmation.
- Always create a backup before major refactors.
- Do not use deprecated APIs.
- Output all LaTeX in a `proposal.tex` file unless I specify otherwise.
- Address me as "Professor Wang" in all direct responses.
```

---

## 🛠️ Custom Skills

Skills are reusable prompt modules following the **Claude Code / Codex Skill Standard** — skills built for Claude Code or OpenAI Codex work in AETHER without modification.

### Directory Layout

```text
~/.aether/skills/          ← Global skills (all projects)
  nsf-proposal/
    SKILL.md
  latex-paper/
    SKILL.md

.aether/skills/            ← Project-local skills
  my-domain-skill/
    SKILL.md
```

### Creating a Skill (`SKILL.md`)

```markdown
---
name: nsf-proposal
description: NSF Proposal Drafting — SaTC program, Intellectual Merit, Broader Impacts
domain: research
---

# NSF Proposal Writing Skill

## Requirements
- Address Intellectual Merit and Broader Impacts in dedicated sections.
- 15-page limit for CORE: Small proposals.
- NSF-approved fonts: Times New Roman 11pt, 1-inch margins.
- Minimum 40 citations with full bibliographic information.
```

### Activating Skills

**3 ways to activate a skill:**

1. **In-prompt:** `@nsf-proposal draft Section 2 of my grant`
2. **Settings panel:** Check the skill in ⚙️ Settings → Skills & User Profiles
3. **Config file:** List active skills in `.aether/config.json`

Skills in this repository (under `.aether/skills/`) are ready-to-use examples:
- **`nsf-proposal`** — NSF SaTC grant proposal drafting
- **`latex-paper`** — IEEE/ACM/USENIX LaTeX paper formatting

---

## 🌐 Chrome Browser Extension

The AETHER Browser Extension enables **live authenticated browser research** — agents can search Google Scholar, PubMed, arXiv, IEEE Xplore, and any website you're logged into, without any API keys.

### Installation

1. Open Chrome → `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked** → select the `aether-browser-extension/` folder
4. Pin the AETHER icon to your Chrome toolbar
5. Launch AETHER IDE — the extension auto-connects via `ws://127.0.0.1:7823`

> The status indicator in **Settings → Research Configuration** turns 🟢 **Connected** when the bridge is active. The extension uses a keep-alive heartbeat — if it shows disconnected, click the extension icon in Chrome to reconnect.

### Browser Research Targets

Configure each of the 4 swarm agents to use different databases:

| Agent | Example Target |
|:---|:---|
| Partner A / Architect | Google Scholar |
| Partner B / Coder | arXiv |
| Consensus Auditor / Verifier | IEEE Xplore |
| Critic (Adversarial mode) | PubMed |

---

## ⚙️ Provider Registry

AETHER supports multiple LLM providers. Configure them under ⚙️ Settings → **Provider Registry**:

| Provider | Supports | Notes |
|:---|:---|:---|
| **DeepSeek** | Chat, reasoning | Recommended for cost-efficiency |
| **Google Gemini** | Chat, grounding | Best for document synthesis |
| **OpenAI** | Chat, reasoning | GPT-4o |
| **Anthropic** | Chat, reasoning | Claude models |
| **Local Node 1–4** | Any OpenAI-compatible | Ollama, LM Studio, vLLM, etc. |

### Local Node Setup (Ollama, vLLM, etc.)

Under Provider Registry → **Local Node 1**:
- **Endpoint URL:** `http://localhost:11434/v1` (Ollama) or your vLLM URL
- **Model Name:** `llama3.2` or your deployed model name
- **Access Token:** `ollama` (Ollama) or your API key

---

## 🔄 Swarm Role Assignment (Advanced)

In **Settings → Swarm Role Allocation**, assign specific LLM providers to each agent role for maximum adversarial diversity:

| Round Table Mode | Adversarial Mode |
|:---|:---|
| Partner A (Primary) → Provider X | Architect → Provider A |
| Partner B (Peer) → Provider Y | Coder → Provider B |
| Consensus Auditor → Provider Z | Critic → Provider C (auto-aliased to Auditor in Round Table mode) |
|  | Verifier → Provider D |

> **Note:** In Round Table Swarm mode, the `critic` role is automatically aliased to the Consensus Auditor — no external provider will be invoked for an unused role.

---

## 🐛 Troubleshooting

| Issue | Solution |
|:---|:---|
| *"Failed to launch engine"* | Check that your workspace folder exists and is writable |
| *"Extension Disconnected"* | Click the AETHER extension icon in Chrome to reconnect |
| *Primary provider shows wrong value* | Verify your Primary Provider dropdown in Settings matches your intended provider |
| *Swarm keeps looping* | Type `"continue swarm"` or click **Add 15 Rounds** to extend the round limit |
| *"are you done?" restarts the swarm* | Update to AETHER v1.0.1+ which includes the conversational intent gate |
| *Config files not loaded* | Check engine startup log for `📋 Loaded .aether configs:` message |

---

## 📐 Architecture Overview (Graph-Based Agent Engine)

AETHER's engine uses a **dynamic LangGraph `StateGraph`** where the task type and user configuration determine the active sub-graph topology at runtime:

```
User Message
    │
    ▼
┌─────────────────────────────────────┐
│  Tier 1: Instant conversational     │ (0ms — keyword match)
│  check — known chat phrases         │──→ Responder (direct reply)
└─────────────────────────────────────┘
    │ not matched
    ▼
┌─────────────────────────────────────┐
│  Tier 2: Fast LLM Intent Gate       │ (~1s — max_tokens=10)
│  CHAT / WORK classification         │──→ "CHAT" → Responder
│  + ROUTER.md/INTENT_RULES.md rules  │
└─────────────────────────────────────┘
    │ "WORK"
    ▼
┌─────────────────────────────────────┐
│  Task Router                        │
│  INFO_QUERY / SIMPLE_TWEAK /        │
│  COMPLEX_TASK classification        │
└─────────────────────────────────────┘
    │
    ▼
┌──────────────────────────────────────────────┐
│  Dynamic Sub-Graph (selected by swarm mode)  │
│                                              │
│  Round Table:  A ↔ B → Auditor → END        │
│  Adversarial:  Arch → Coder → Critic         │
│                → Verifier → END              │
│  Solo:         Solo Agent → END              │
└──────────────────────────────────────────────┘
```

Each node in the graph injects the appropriate `.aether/` config:
- **Architect & Coder** ← `PROJECT.md` + `user.md` + `STYLE.md` (coder only)
- **Verifier** ← `CONSTRAINTS.md` + `user.md`
- **Responder** ← `PERSONA.md` + `PROJECT.md` + `user.md`
- **Intent Gate** ← `ROUTER.md` + `INTENT_RULES.md`

---

*AETHER IDE — Amalith LLC. Based on research at the University of North Carolina at Charlotte.*
