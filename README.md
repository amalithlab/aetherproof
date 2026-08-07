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

The **AETHER Browser Extension** acts as a secure local **Browser Provider**, allowing research agents to navigate, search, extract content, download PDFs, and gather academic citations inside your authenticated Chrome browser session.

### 📥 Local Installation Guide (Developer Mode)

1. Open **Google Chrome** and navigate to `chrome://extensions/`
2. Enable **Developer mode** using the toggle switch in the top right corner.
3. Click **Load unpacked** in the top left.
4. Select the extension directory:
   ```text
   /Volumes/HDD/AMAV/aether-browser-extension
   ```
5. Pin the **AETHER Browser Provider** icon to your extension bar.
6. Open **AETHER IDE** — the extension will automatically connect via WebSocket on `ws://localhost:7823`. The status indicator in **Settings → Research Configuration** will turn 🟢 **Connected**.

### ⚙️ Browser Research Agent Mapping

When **Browser Research Mode** is selected, research agents map to configured engines:

| Agent | Browser Search Engine | Default Search URL |
| :--- | :--- | :--- |
| **Agent 1** | Google Search | `https://google.com` |
| **Agent 2** | Bing Search | `https://bing.com` |
| **Agent 3** | Google Scholar | `https://scholar.google.com` |
| **Agent 4** | PubMed | `https://pubmed.ncbi.nlm.nih.gov` |
| **Agent 5** | arXiv | `https://arxiv.org` |
| **Agent 6** | IEEE Xplore | `https://ieeexplore.ieee.org` |
| **Agent 7** | ACM Digital Library | `https://dl.acm.org` |
| **Agent 8** | Semantic Scholar | `https://semanticscholar.org` |

You can edit any search URL or click **+ Add Custom Search Engine** to add specialized portals (e.g., SpringerLink, Nature, JSTOR, library proxy URLs).

### 🔒 Privacy & Security

- All authentication remains entirely inside Chrome.
- **No passwords, cookies, or session tokens** are ever transmitted to the IDE or external LLM servers.
- The extension executes standard DOM navigation and text extraction locally on your device.


---

## 🎯 Customizing Domain Specifications (`.md` Property Harnesses)

Users can provide custom domain knowledge, business rules, and verification criteria to tailor AETHER IDE to any domain (Software, Research Papers, NSF Proposals, Medical, Legal, Business Plans, etc.):

### Option 1: Direct Markdown File Path
Pass any custom `.md` file path directly in your prompt:
> *"AETHER, audit this section based on rules in `@/path/to/my_domain_rules.md`"*

### Option 2: Project-Level Domain Folder (`.aether/domains/<name>/`)
Create a custom domain folder inside your project's `.aether/` directory:
```text
my-project/
└── .aether/
    ├── config/
    │   └── capabilities.yaml       # Override default model priorities per capability
    └── domains/
        └── my-custom-domain/
            ├── index.md            # Primary domain rules & constraints
            ├── rules.md            # Detailed verification guidelines
            └── verification.md     # Custom verification scripts or criteria
```

### Option 3: Global User Domain (`~/.aether/domains/<name>/`)
Place domain folders under your user home directory (`~/.aether/domains/`) to make custom domain knowledge available across **all workspaces** on your machine.

---

## 🔍 Search Engine & Web Research Configuration

For tasks requiring live web research, academic literature lookup, or web crawling:

1. **Gemini Search Grounding (Recommended & Free):** Set your **Global Swarm Default** to **Google Gemini** in Settings. Gemini's native search grounding will pull live Google Search results automatically with no extra search API key needed.
2. **Dedicated Search APIs:** Configure API keys for `Tavily`, `Exa`, `Bing API`, or `Google Custom Search Engine` in the Web Search section of Settings.

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
