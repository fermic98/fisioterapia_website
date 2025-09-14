This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

1. Install Node.js and npm:
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Verify installation with `node -v` and `npm -v` in Command Prompt

   **Note for Git Bash users**: If Git Bash doesn't recognize Node.js commands, you have a few options:
   - Restart Git Bash after installing Node.js
   - Add Node.js to your PATH (if not done during installation)
   - Use Command Prompt or PowerShell instead of Git Bash

### Installation

Once Node.js and npm are installed, install the project dependencies:

```bash
# Install all dependencies at once if the project was cloned
npm install

# Or install them one by one
# Install Next.js and React
npm install next@latest react@latest react-dom@latest

# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Install react-three library to load an animated 3D model
npm install three @react-three/fiber @react-three/drei @react-three/gltfjsx

