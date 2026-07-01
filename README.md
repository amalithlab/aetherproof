# AETHERPROOF IDE - Universal Aetherproof Verification Autonomous Orchestrator
**Owned by Amalith LLC | Developed by Amalith Lab**



> **Academic Foundation:** This project is based on the research paper [vibeCoding](https://webpages.charlotte.edu/yonwang/papers/vibeCoding.pdf).

AETHERPROOF IDE is an advanced, autonomous AI Swarm Engine designed to operate directly within your Visual Studio Code environment. It utilizes a LangGraph-based architecture featuring specialized agents (Architect, Coder, Critic, Verifier) to autonomously design, develop, audit, and test complex software systems.

## 📁 Repository Structure

This repository is the official distribution hub for **AETHERPROOF IDE**.

- **[Releases](https://github.com/amalithlab/aetherproof/releases)**: This is where you should download the latest stable version of the extension.

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
1. **Activate the extension:** Click the **AETHERPROOF IDE** icon in your VS Code Activity Bar (left sidebar) to open the chat panel and settings panel.
2. **Choose your Swarm Mode:**
   - **Solo Agent:** Uses a single primary LLM provider to execute tasks step-by-step. Best for quick edits and linear tasks.
   - **Adversarial Swarm:** Launches a full multi-agent graph with specialized roles (Architect, Coder, Critic, Verifier) debating and verifying code logic. Enforces TDD and security audits.
   - **Round Table Swarm:** An iterative, consensus-driven debate format where multiple agents argue architectural and technical choices side-by-side until agreement is negotiated.
3. **Configure LLM Providers:**
   - Go to the Settings Panel inside the Aetherproof view.
   - Assign providers/models for each role (Architect, Coder, Critic, Verifier) or set a global **Primary Provider** default.
   - Ensure the respective API keys are entered (e.g., Anthropic, Google Gemini, OpenAI, DeepSeek, MiniMax, etc.).
4. **Configure the Search Engine:**
   - For live web research and online solicitation analysis, select a **Search Provider**.
   - If **Google** (Gemini) is used as the primary/global provider, Aetherproof automatically uses **Gemini Search Grounding** as the default search engine (providing high-quality live Google Search results for free with no additional key needed).
   - If utilizing other providers, configure dedicated search keys (such as `Tavily`, `Exa`, `Bing Search API`, or `Google Custom Search Engine`) in settings. Otherwise, the engine falls back to free HTML scraping (DuckDuckGo/Bing).
5. **Run your task:** Type your prompt in the chat box and watch the engine orchestrate the solution!

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
