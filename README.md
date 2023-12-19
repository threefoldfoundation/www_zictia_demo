# ZICTIA website

Welcome to the ZICTIA website! This repository contains the source code for a web application built with Vue.js, showcasing the features of the ZICTIA Organization.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Node.js and npm](#2-install-nodejs-and-npm)
  - [3. Install Yarn (Optional but Recommended)](#3-install-yarn-optional-but-recommended)
  - [4. Install Project Dependencies](#4-install-project-dependencies)
  - [5. Run the Development Server](#5-run-the-development-server)
  - [6. Access the Application](#6-access-the-application)
- [Building for Production](#building-for-production)
- [Linting and Fixing Files](#linting-and-fixing-files)
- [Customize Configuration](#customize-configuration)
- [About Vue.js](#about-vuejs)
- [Issues and Contributions](#issues-and-contributions)

## Prerequisites

Before you can run the project locally, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Yarn](https://yarnpkg.com/) (optional but recommended)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/threefoldfoundation/www_zictia_demo.git
cd www_zictia_demo
```

### 2. Install Node.js and npm

Ensure you have Node.js and npm installed. If not, download and install them from [https://nodejs.org/](https://nodejs.org/).

### 3. Install Yarn (Optional but Recommended)

Yarn is a fast and reliable alternative package manager. You can install it globally using npm:

```bash
npm install -g yarn
```

### 4. Install Project Dependencies

Install the project dependencies using npm or Yarn:

```bash
npm install
# or with Yarn
yarn
```

This command installs the necessary packages and dependencies required for the project.

### 5. Run the Development Server

```bash
npm run serve
# or with Yarn
yarn serve
```

The development server will start, and you can view the app locally in your browser.

### 6. Access the Application

Open your web browser and go to:

- [http://localhost:8080/](http://localhost:8080/) - Local address
- [http://192.168.0.117:8080/](http://192.168.0.117:8080/) - Network address

Use one of the above URLs to access the ZICTIA Demo website.

## Building for Production

To create a production-ready build, run the following command:

```bash
yarn build
```

This command generates optimized production files in the `dist` directory.

## Linting and Fixing Files

To lint and fix project files, run:

```bash
yarn lint
```

This command uses ESLint to analyze your code and automatically fix any issues it can.

## Customize Configuration

See the [Configuration Reference](https://cli.vuejs.org/config/) for customization options.

## About Vue.js

Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adaptable, making it easy to integrate with other libraries or existing projects.

Learn more about Vue.js at [https://vuejs.org/](https://vuejs.org/).

## Issues and Contributions

If you encounter any issues or have suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/threefoldfoundation/www_zictia_demo). Contributions are welcome!
