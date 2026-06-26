# React + TypeScript Study Application

This repository contains a React application built with TypeScript, following the step-by-step implementation described in **Chapters 20 & 21** of Essential TypeScript (3rd Edition) by Adam Freeman.

## 🛠️ Tech Stack & Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v16.x or higher recommended)
- [npm](https://npmjs.com)
- [Docker Engine](https://docker.com) (Optional, if you wish to containerize the app)

## ⚡ Getting Started

Follow these steps to set up, build, and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com
cd reactapp
```

### 2. Install Dependencies

Install all required packages, including TypeScript definitions and project dependencies:

```bash
npm install
```

### 3. Build the React Application

Compile the TypeScript and React source code into optimized production assets:

```bash
npm run build
```

### 4. Start the Application Server

Run the localized Node.js backend server to serve the built static application files and handle data APIs:

```bash
node server.js
```

Once the server starts successfully, open your browser and navigate to:
👉 **[http://localhost:4002](http://localhost:4002)**

---

## 🐳 Running with Docker

If you want to containerize the build and isolate the environment, use the included Dockerfile configuration.

### Build the Docker Image

```bash
docker build . -t reactapp
```

### Run the Container

Map the required server port (`4002`) and start the application container:

```bash
docker run -p 4002:4002 reactapp
```

Once started, the application will be accessible at `http://localhost:4002`.

---

## 📚 Reference material

- **Book**: _Essential TypeScript_ by Adam Freeman (Manning Publications)

---

_This repository is maintained by [denisadamchik](/denisadamchik) for self-study and reference purposes._
