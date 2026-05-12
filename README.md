# ATHER - Adversarial Multi-Agent Autonomous Orchestrator

> **Academic Foundation:** This project is based on the research paper [vibeCoding](https://webpages.charlotte.edu/yonwang/papers/vibeCoding.pdf).

ATHER is an advanced, autonomous AI Swarm Engine designed to operate directly within your Visual Studio Code environment. It utilizes a LangGraph-based architecture featuring specialized agents (Architect, Coder, Critic, Verifier) to autonomously design, develop, audit, and test complex software systems.

## 📁 Repository Structure

This repository contains the production-ready distribution artifacts for the ATHER system:

- **`extensions/`**: Platform-specific VS Code extension packages (`.vsix`). These are optimized to include only the necessary engine binary for their target OS, ensuring a lightweight installation.
- **`bin/`**: Standalone, cross-platform CLI binaries for the ATHER engine. These can be used for headless automation or CI/CD integration without requiring a local Node.js environment.

## 🚀 Installation Instructions

You do **not** need to install Node.js, Bun, or any other dependencies to run the engine.

### Step 1: Download the Extension
Download the specific `.vsix` file from the [extensions/](extensions/) directory for your operating system:
- **MacOS (Apple Silicon):** `extensions/aether-ide-darwin-arm64-0.1.0.vsix`
- **MacOS (Intel):** `extensions/aether-ide-darwin-x64-0.1.0.vsix`
- **Windows:** `extensions/aether-ide-win32-0.1.0.vsix`
- **Linux:** `extensions/aether-ide-linux-0.1.0.vsix`

### Step 2: Install in Visual Studio Code
1. Open **Visual Studio Code**.
2. Navigate to the **Extensions** view (`Cmd+Shift+X` or `Ctrl+Shift+X`).
3. Click the **Views and More Actions** icon (`...` in the top right corner).
4. Select **Install from VSIX...**.
5. Select the `.vsix` file you downloaded.

### Step 3: Setup and Usage
1. Click the **ÆTHER** icon in your Activity Bar (left sidebar).
2. Input your LLM API keys (Anthropic, Google, OpenAI, etc.).
3. Type your task and watch the Swarm orchestrate your solution!

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

## 🛠️ CLI Standalone Usage

For headless or remote execution, download and extract the compressed binaries in the [bin/](bin/) directory:
```bash
# Example: Extracting and running the Linux binary
unzip bin/ather-linux-x64.zip
./ather-linux-x64 "Refactor the authentication middleware in src/middleware/"
```

---
*Final Status: 100% Native Autonomy Achieved*
