# AETHERPROOF IDE - Universal Aetherproof Verification Autonomous Orchestrator
**Owned by Amalith LLC | Developed by Amalith Lab**



> **Academic Foundation:** This project is based on the research paper [vibeCoding](https://webpages.charlotte.edu/yonwang/papers/vibeCoding.pdf).

AETHERPROOF IDE is an advanced, autonomous AI Swarm Engine designed to operate directly within your Visual Studio Code environment. It utilizes a LangGraph-based architecture featuring specialized agents (Architect, Coder, Critic, Verifier) to autonomously design, develop, audit, and test complex software systems.

## 📁 Repository Structure

This repository is the official distribution hub for **AETHERPROOF IDE**.

- **[Releases](https://github.com/amalithlab/aetherproof/releases)**: This is where you should download the latest stable version of the extension.
- **`extensions/`**: Contains the latest built `.vsix` packages for each platform, synced automatically from our development repository.

## 🚀 Installation & Releases

All versions are automatically compiled and published from our development repository: [amalithlab/aetherproof-dev](https://github.com/amalithlab/aetherproof-dev).

### Download the Extension
Please visit the **[Latest Release](https://github.com/amalithlab/aetherproof/releases/latest)** to download the `.vsix` for your operating system:
- **Linux**: `aetherproof-ide-linux.vsix`
- **MacOS**: `aetherproof-ide-macos.vsix`
- **Windows**: `aetherproof-ide-windows.vsix`

### How to Install in VS Code
1. Open **Visual Studio Code**.
2. Navigate to the **Extensions** view (`Cmd+Shift+X`).
3. Click the **Views and More Actions** icon (`...`).
4. Select **Install from VSIX...** and choose your downloaded file.

### Step 3: Setup and Usage
1. Click the **AETHERPROOF IDE** icon in your Activity Bar (left sidebar).
2. Input your LLM API keys (Anthropic, Google, OpenAI, etc.).
3. Type your task and watch the Swarm orchestrate your solution!

### 🌐 Enabling the Web Browser Subagent (Optional)
To enable the autonomous **Browser Subagent** for real-time web research, documentation lookups, and bypassing Cloudflare blocks:
1. Open your terminal in the workspace directory.
2. Run the following command to download the headless browser binaries:
   ```bash
   npx playwright install chromium
   ```

## 🔍 Web Search Engine Configuration
For tasks requiring live web research, literature collection, or crawling, the engine uses search queries. 

To provide high-quality search results with zero setup, AETHERPROOF includes a built-in **Search Fallback Cascade**:
1. **Premium Search APIs:** Checks for configured API keys (`Tavily`, `Exa`, `Bing API`, or `Google Custom Search Engine`).
2. **Gemini Search Grounding (Recommended & Free):** If you configure a Google Gemini API key (`AETHERPROOF_KEY_GOOGLE`), the engine automatically uses Gemini's native Google Search grounding feature to pull real Google Search results for free. 
   > [!TIP]
   > We recommend setting your **Global Swarm Default** (Primary Provider) to **Google Gemini** in the Settings Panel. This enables free, high-quality search grounding automatically across the swarm with no extra API key needed!
3. **DuckDuckGo HTML Scraping:** Text-based search scraping (free).
4. **Bing HTML Scraping:** GET-based search page scraping (free fallback).
5. **Wikipedia API:** Basic term matching.


## 🧠 Advanced Swarm Capabilities

We have achieved **100% Native Autonomy** with the following integrated modules:

- **👁️ IDE "Sight"**: Real-time telemetry from active tabs, cursor positions, and highlighted code.
- **💻 Persistent Terminals**: Multi-process background shell management with interactive TUI confirmation support.
- **🌐 Browser Subagent**: Fully autonomous Playwright-based navigation specialist for dynamic web applications.
- **🖼️ Rich Artifact UI**: Native rendering of Mermaid diagrams, GitHub alerts, and multi-media carousels.
- **🐙 Native Repo Management**: Autonomous Git branch management, commits, and GitHub Pull Request integration.
- **🛡️ Permission Guard**: Pattern-based security boundaries that block dangerous shell operations.
- **📂 Git Worktree Orchestration**: Isolated environment creation for complex branch-level refactors.
- **📊 Usage Analytics**: Built-in "Time Saved" tracking and token economic auditing.

---
*Final Status: 100% Native Autonomy Achieved*
