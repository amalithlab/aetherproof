# AETHER IDE — Standalone Multi-Agent AI Engineering Environment
**Owned by Amalith LLC | Developed by Amalith Lab**

> **Academic Foundation:** This project is based on the research paper [From Vibe to Veracity: A Chain-of-Thought Framework for AI-Driven Software Engineering and Security](https://webpages.charlotte.edu/yonwang/papers/vibeCoding.pdf).

AETHER IDE is an advanced, autonomous multi-agent AI engineering application. It operates as a standalone desktop application for **macOS**, **Windows**, and **Linux**, driven by a LangGraph-based architecture featuring specialized autonomous agents (Architect, Coder, Critic, Verifier) to design, develop, audit, and test complex software systems.

---

## 📁 Repository Structure & Distribution

This repository is the official distribution hub for **AETHER IDE**.

- **[Releases](https://github.com/amalithlab/aetherproof/releases/tag/latest-dev)**: Download pre-built standalone installers for macOS (`.dmg`/`.zip`), Windows (`.exe` setup), and Linux (`.AppImage`/`.deb`).

---

## 🚀 Installation & Downloads

Standalone desktop installers are compiled and published directly from our development build pipeline.

### Download Standalone Binaries
Visit the **[Latest Development Release](https://github.com/amalithlab/aetherproof/releases/tag/latest-dev)** to download the binary for your platform:

| Operating System | Package Format | Download File |
| :--- | :--- | :--- |
| **macOS** (Apple Silicon M1/M2/M3) | DMG Installer | `Aether-1.0.0-arm64.dmg` |
| **macOS** (Apple Silicon M1/M2/M3) | Portable ZIP | `Aether-1.0.0-arm64-mac.zip` |
| **macOS** (Intel x64) | DMG Installer | `Aether-1.0.0.dmg` |
| **macOS** (Intel x64) | Portable ZIP | `Aether-1.0.0-mac.zip` |
| **Windows** (x64) | NSIS Installer Setup | `Aether Setup 1.0.0.exe` |
| **Linux** (x64) | Universal AppImage | `Aether-1.0.0.AppImage` |
| **Linux** (x64) | Debian / Ubuntu Package | `aether_1.0.0_amd64.deb` |

---

## 💻 Platform Installation Guides

### macOS Installation
1. Download `Aether-1.0.0-arm64.dmg` (for Apple Silicon) or `Aether-1.0.0.dmg` (for Intel).
2. Double-click the `.dmg` file to open the installer volume.
3. Drag **Aether.app** into your **Applications** folder.
4. Launch **Aether** from Launchpad or Finder.

### Windows Installation
1. Download `Aether Setup 1.0.0.exe`.
2. Double-click the installer executable to start setup.
3. Follow the installation wizard to choose an installation folder.
4. Launch **Aether** from your Desktop shortcut or Start Menu.

### Linux Installation (AppImage / DEB)
- **AppImage (Universal)**:
  ```bash
  chmod +x Aether-1.0.0.AppImage
  ./Aether-1.0.0.AppImage
  ```
- **Debian / Ubuntu (.deb)**:
  ```bash
  sudo dpkg -i aether_1.0.0_amd64.deb
  sudo apt-get install -f # Fix dependencies if needed
  ```

---

## ⚙️ Initial Setup & Swarm Configuration

1. **Launch AETHER IDE**: Open the standalone desktop app.
2. **Select Working Workspace**:
   - Click ⚙️ **Settings** in the top-right corner.
   - Under **Current Working Workspace**, click **Change...** to select your target project folder.
3. **Choose your Swarm Mode & Swarm Type**:
   - **Default Operating Mode**: **Round Table Swarm** (Iterative, consensus-driven collaborative debate format optimized for complex synthesis).
   - **Default Swarm Type**: **Document Synthesis & Academic Research** (Tailored for literature review, scientific research, evidence collection, and paper writing).
   - Other modes available: *Adversarial Swarm (4-Agents)*, *Solo Agent*.
   - Other types available: *Software Development*, *Business Process Automation*, *Environment Diagnostics*.
4. **Configure Research Mode & LLM Providers**:
   - Under **Research Configuration**, choose between:
     - **🔍 Search Provider Mode:** Uses API-based search providers (Gemini, Tavily, Exa, Bing, Brave, SerpAPI, Google CSE) for fast web searches.
     - **🌐 Browser Research Mode (Recommended for Academic Research):** Connects to the **AETHER Browser Extension** in Google Chrome to operate using your local authenticated login session (Google Scholar, PubMed, arXiv, IEEE Xplore, ACM Digital Library, Semantic Scholar, university library portals, etc.).
   - Under **Provider Registry**, select your preferred LLM platform (e.g. Google Gemini, DeepSeek, OpenAI, Anthropic, Ollama, etc.), enter your API Key, and click **Verify Connection**.
5. **Start Coding / Researching**: Type your instruction in the message prompt at the bottom and let the swarm execute!

---

## 🌐 Installing & Using the Chrome Browser Extension

The **AETHER Browser Extension** is included directly in this repository under `./aether-browser-extension`. It acts as a secure local **Browser Provider**, allowing research agents to navigate, search, extract content, download PDFs, and gather academic citations inside your authenticated Chrome browser session.

### 📥 Local Installation Guide (Developer Mode)

1. Open **Google Chrome** and navigate to `chrome://extensions/`
2. Enable **Developer mode** using the toggle switch in the top right corner.
3. Click **Load unpacked** in the top left.
4. Select the `aether-browser-extension` folder inside this repository:
   ```text
   aether-browser-extension/
   ```
5. Pin the **AETHER Browser Extension** icon to your Chrome extension bar.
6. Launch **AETHER IDE** — the extension will automatically connect via WebSocket on `ws://127.0.0.1:7823`. The status indicator in **Settings → Research Configuration** will turn 🟢 **Connected**.

---

### ⚙️ Swarm Research Agents Configuration (4 Agents)

AETHER IDE assigns research tasks to **4 specialized Swarm Research Agents**:

| Swarm Agent | Default Role | Search Engine Dropdown Selection | Default Search Target / URL |
| :--- | :--- | :--- | :--- |
| **Agent 1** | **Architect Agent** | Dropdown Selector (Chrome Extension or API Provider) | `Google Scholar` (`https://scholar.google.com`) |
| **Agent 2** | **Coder Agent** | Dropdown Selector (Chrome Extension or API Provider) | `PubMed` (`https://pubmed.ncbi.nlm.nih.gov`) |
| **Agent 3** | **Critic Agent** | Dropdown Selector (Chrome Extension or API Provider) | `arXiv` (`https://arxiv.org`) |
| **Agent 4** | **Verifier Agent** | Dropdown Selector (Chrome Extension or API Provider) | `IEEE Xplore` (`https://ieeexplore.ieee.org`) |

Each of the 4 Swarm Research Agents has an interactive dropdown menu allowing users to select either a **Chrome Extension Engine** or an **API Search Provider**.

#### Dropdown Selection Menu Options for Each Agent:
- **Chrome Extension Engines** *(Requires AETHER Chrome Extension)*:
  - `Google Scholar` (`https://scholar.google.com`)
  - `PubMed` (`https://pubmed.ncbi.nlm.nih.gov`)
  - `arXiv` (`https://arxiv.org`)
  - `IEEE Xplore` (`https://ieeexplore.ieee.org`)
  - `ACM Digital Library` (`https://dl.acm.org`)
  - `Semantic Scholar` (`https://semanticscholar.org`)
  - `Google Search` (`https://google.com`)
  - `Bing Search` (`https://bing.com`)
  - `Custom Web Search` (User inputs custom web search portal URL)
- **API Search Providers**:
  - `Google Gemini Grounding` *(Reuses Primary Gemini API Key)*
  - `Tavily API` *(Uses Tavily API Key)*
  - `Exa API` *(Uses Exa API Key)*
  - `Brave Search API` *(Uses Brave API Key)*
  - `SerpAPI` *(Uses SerpAPI Key)*
  - `Google CSE` *(Uses Google CSE Key & Engine ID)*
  - `Custom API Provider` *(Uses Custom API Endpoint & Key)*

---

### 🔑 How API Keys Work for Search Engines

| Search Provider Selected | Key Requirement | How & Where It Works |
| :--- | :--- | :--- |
| **Google Gemini Grounding** | **Primary Gemini Key** | Automatically reuses your primary **Google Gemini API Key** set under **Settings → Provider Registry**. No extra search API key required. |
| **Tavily / Exa / Brave / Bing / Google CSE** | **Dedicated Provider Key** | Enter your API key in **Settings → Research Configuration → Search Provider Mode**. When selected by any of the 4 agents, the engine retrieves the corresponding saved key. |
| **Chrome Extension Engines** | **No API Key Required** | Research queries execute directly via your local authenticated Chrome browser session over the local WebSocket/HTTP bridge (`127.0.0.1:7823`). |

---

## 🛠️ Developing & Using Custom Skills & User Profiles

AETHER IDE features a **Harness-Engineered Skill & Profile System** (`.aether/skills/` and `~/.aether/skills/`). Users can define, download, or share custom domain skills (`SKILL.md`) to guide the swarm agents for specialized workflows (e.g., NSF Grant proposals, academic math papers, business meetings, code refactoring).

### 📁 Directory Layout

```text
~/.aether/                                 # Global user settings & skills across all projects
├── profile.yaml                           # User persona, role defaults & global preferences
├── user.md                                # Hard constraints & formatting instructions
└── skills/                                # Global user skills
    ├── nsf-proposal/
    │   └── SKILL.md
    ├── math-paper/
    │   └── SKILL.md
    └── business-strategy/
        └── SKILL.md

.aether/                                   # Workspace-level project skills
└── skills/                                # Project-specific custom skills
    └── my-custom-skill/
        └── SKILL.md
```

### ✍️ Creating a Custom Skill (`SKILL.md`)

Each skill is a simple directory containing a `SKILL.md` file with YAML frontmatter metadata:

```markdown
---
name: nsf-proposal
description: NSF Proposal Drafting & Compliance (Intellectual Merit, Broader Impacts, Budget & Citations)
domain: research
---

# NSF Proposal Writing Skill

## Instructions
- Ensure every proposal section explicitly addresses **Intellectual Merit** and **Broader Impacts**.
- Maintain strict page and word budget constraints per NSF Grant Proposal Guide (GPG) guidelines.
- Format all literature references with complete author, venue, year, DOI, and BibTeX metadata.
```

### 🧠 Automatic Intelligent Skill Routing

AETHER IDE includes an **Automatic Task Classifier & Intent Router**. The orchestrator automatically evaluates the user's prompt (and selected Project Swarm Type) to detect intent and load the relevant skills dynamically:

| Task Intent Detected | Matched Keywords / Project Type | Automatically Loaded Skill |
| :--- | :--- | :--- |
| **NSF Proposal Writing** | `NSF`, `grant`, `proposal`, `Intellectual Merit`, `Broader Impacts` | `nsf-proposal/SKILL.md` |
| **Academic Math & Proofs** | `math`, `theorem`, `proof`, `LaTeX`, `SymPy`, `Jacobian`, `equation` | `math-paper/SKILL.md` |
| **Business Strategy** | `business`, `strategy`, `market`, `TAM`, `executive`, `financial` | `business-strategy/SKILL.md` |
| **Software Engineering** | `code`, `refactor`, `bug`, `test`, `feature` OR Swarm Type: `software` | `software-engineering/SKILL.md` |

Users can also manually toggle skills on or off in **Settings → Skills & User Profiles**.

### 📥 Installing & Downloading Community Skills
To add a new skill (e.g., a community skill downloaded online for NSF proposals, arXiv paper writing, or business strategy):
1. Copy the skill folder directly into your workspace `.aether/skills/` directory or your global `~/.aether/skills/` folder.
2. Open **Settings → Skills & User Profiles** in AETHER IDE to view or toggle active skills.

---

## 🧠 Advanced Autonomous Features

AETHER IDE includes full native desktop autonomy:

- **🖥️ Standalone Execution Engine**: Native Electron desktop app running an embedded orchestrator process.
- **💻 Integrated Terminal Management**: Executes workspace build, test, and shell commands.
- **🌐 Playwright Subagent**: Headless browser integration for web research and live UI verification.
- **🖼️ Interactive Render Panel**: Native rendering of Markdown, LaTeX documents, GitHub alert boxes, and Mermaid flowcharts.
- **🔒 Security Boundaries**: Built-in permission guard preventing unauthorized or destructive shell operations.

---
*Final Status: 100% Native Autonomy — Standalone Desktop Executables for macOS, Windows, and Linux.*
