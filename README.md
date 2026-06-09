# React + Vite + Docker

This template provides a minimal setup to get React working in Vite with HMR, ESLint rules, and Docker support for local development.

## Overview

This repository is configured for local development with:
- ⚛️ **React** — A JavaScript library for building user interfaces
- ⚡ **Vite** — A fast frontend build tool with Hot Module Replacement (HMR)
- 📏 **ESLint** — A tool for identifying and fixing code quality issues
- 🐳 **Docker** — Containerized development environment

## Official Plugins

Two official Vite plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs)

## React Compiler

The React Compiler is **not** enabled on this template because of its impact on dev & build performances.

To add it, see the [official documentation](https://react.dev/learn/react-compiler/installation).

## Docker Setup

This project includes a `Dockerfile` and `.dockerignore` for containerized development.

### Prerequisites
- [Docker](https://www.docker.com/) installed on your machine

### Build the Image
```bash
docker build -t react-docker .
```

### Run the Container
```bash
docker run -p 5173:5173 react-docker
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Local Development

If you prefer to run the project without Docker:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Install Dependencies
```bash
npm install
```

### Start the Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview the Production Build
```bash
npm run preview
```

## ESLint Configuration

If you are developing a production application, we recommend using **TypeScript** with type-aware lint rules enabled.

Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Structure

```
react-docker/
├── public/              # Static assets served as-is
│   ├── favicon.svg
│   └── icons.svg
├── src/                 # Application source code
│   ├── assets/          # Images and other imported assets
│   ├── App.css          # App-level styles
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .dockerignore        # Files excluded from Docker build
├── .gitignore           # Files excluded from Git
├── Dockerfile           # Docker build configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT)....
<!-- Update #1 - Wed Jun 10 02:27:33 AM EAT 2026 -->
## Update 1
Documentation update iteration 1 for the project.

<!-- Update #2 - Wed Jun 10 02:27:37 AM EAT 2026 -->
## Update 2
Documentation update iteration 2 for the project.

<!-- Update #3 - Wed Jun 10 02:27:41 AM EAT 2026 -->
## Update 3
Documentation update iteration 3 for the project.

<!-- Update #4 - Wed Jun 10 02:27:44 AM EAT 2026 -->
## Update 4
Documentation update iteration 4 for the project.

<!-- Update #5 - Wed Jun 10 02:27:48 AM EAT 2026 -->
## Update 5
Documentation update iteration 5 for the project.

<!-- Update #6 - Wed Jun 10 02:27:52 AM EAT 2026 -->
## Update 6
Documentation update iteration 6 for the project.
