# React + TypeScript Study Application

This repository contains a React application built with TypeScript, following the step-by-step implementation described in **Chapters 20 & 21** of [Essential TypeScript (3rd Edition)](https://apress.com "Essential TypeScript by Adam Freeman") by Adam Freeman.

The purpose of this project is to demonstrate how TypeScript adds type safety, robustness, and better developer experience to a React ecosystem, explicitly managing component states, props, and data stores.

## 🚀 Key Features Explored

- **TSX Integration:** Defining functional and class-based React components using TypeScript `.tsx` syntax.
- **Type-Safe Props & State:** Explicitly typing component properties and local states to eliminate runtime errors.
- **Structured Data Store:** Building a centralized data store to handle local data states and seamlessly interact with external HTTP APIs.
- **Advanced Component Communication:** Managing child-to-parent communications through strongly-typed callbacks.

## 📂 Project Structure Overview

Based on the book's architecture, the application is organized around the core separation of data models and UI rendering:

```text
src/
├── models/         # TypeScript data structures and entities (Product, Order, etc.)
├── data/           # Data store implementations, HTTP API request handlers, and types
├── components/     # React components (.tsx files) with strictly typed props and states
├── App.tsx         # Root application component orchestrating the application flow
└── index.tsx       # Application entry point
```

## 🛠️ Tech Stack & Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v16.x or higher recommended)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)

## ⚡ Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com
cd reactapp
```

### 2. Install Dependencies

Install all package requirements, including type definitions (`@types/react`, `@types/react-dom`, etc.):

```bash
npm install
```

### 3. Run the Development Server

Launch the React development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📝 Learning Highlights from Chapters 20 & 21

1. **Chapter 20 (Creating a React App):** Focuses on configuring the TypeScript compiler (`tsconfig.json`) for React development, setting up the basic data model, and creating core UI elements using typed components.
2. **Chapter 21 (Creating a React App, Part 2):** Covers expanding the data store functionality, managing web services via asynchronous HTTP requests, implementing CRUD operations, and finalizing the layout flow.

---

_This repository is maintained by [denisadamchik](/denisadamchik) for self-study and reference purposes._
