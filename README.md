# 🧑‍🎨 Blog Frontend - React + Vite + Tailwind CSS + Atomic Design

A modern, modular and responsive frontend for a blog application built using **React**, **Vite**, **Tailwind CSS**, and **TypeScript**.  
Implements **Atomic Design** principles, API integration, and supports Light/Dark mode.

---

## 🚀 Features

- ⚛️ React with Vite (blazing fast dev experience)
- 🎨 Tailwind CSS for utility-first styling
- 🧩 Atomic Design structure (`Atomic`, `Molecules`, `Templates`)
- 🌗 Light & Dark mode support
- 🌐 Connects to backend API (Express + MySQL + Redis)
- 📱 Fully responsive design for all devices
- 📦 Modular TypeScript components
- 🧠 Centralized types (`Types/` folder)
- 🖼️ Asset management in `assets/`

---

## 🧱 Tech Stack

| Tool            | Role                                |
|------------------|--------------------------------------|
| ⚛️ React + Vite  | UI library + build tool              |
| 🎨 Tailwind CSS  | Styling                              |
| 🌗 ThemeContext  | Dark/Light mode management           |
| 🔀 React Router  | Page routing (if applicable)         |
| 📡 Fetch/Axios   | API communication                    |
| 🧩 Atomic Design | Component structure methodology       |
| 🧾 TypeScript    | Type-safe development                |

---

## 📁 Folder Structure
📦 src
├── 📁 Components
│ ├── ⚛️ Atomic # Smallest visual elements (e.g., Buttons, Inputs)
│ ├── 🧬 molecules # Composed UI blocks (e.g., Navbar, Cards)
│ └── 📐 templates # Page-level layout blocks
├── 📁 Types # Global TS type definitions
├── 📁 assets # Static images & icons
├── 📄 App.tsx # Main App component
├── 📄 main.tsx # Entry point
├── 📄 index.css # Tailwind base & global styles
├── 📄 vite-env.d.ts


---

## 📦 Installation

```bash
npm install

🧪 Development
npm run dev
