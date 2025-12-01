# 🤖 AI Event Maker

**A full-featured SaaS platform for creating, planning, and managing events using Generative AI (Gemini API).**

[![Tech Stack: Next.js 16](https://img.shields.io/badge/Next.js-16-000000.svg?style=for-the-badge&logo=next.js)]
[![Framework: React 19](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)]
[![Database: Convex](https://img.shields.io/badge/Convex-008080.svg?style=for-the-badge&logo=convex)]
[![AI Core: Gemini API](https://img.shields.io/badge/AI%20Core-Gemini%20API-4285F4.svg?style=for-the-badge&logo=google)]
[![Authentication: Clerk](https://img.shields.io/badge/Auth-Clerk-6E45E2.svg?style=for-the-badge&logo=clerk)]
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

#### 🌐 [Visit the Platform (Demo Site)](https://ai-event-maker-sxidsvit.vercel.app/)

---

## 💡 About the Project

**AI Event Maker** is a platform for creating and managing events, built as a **SaaS model**. It uses the **Gemini API** for intelligent generation of event ideas, themes, and content, and **Convex** as a powerful, reactive serverless database. The project demonstrates a complete implementation of a modern **full-stack application** using the latest versions of **Next.js 16** and **React 19**.

## ✨ Key Features

- **Generative AI (Gemini):** Intelligent assistance in creating unique titles, descriptions, and comprehensive event programs.
- **Event Management:** Create, edit, and view events stored in the Convex database.
- **QR Code Tickets:** Generation and scanning (via `react-qr-code` and `html5-qrcode`) of unique tickets for attendees.
- **Secure Authentication:** Complete and fast user authentication (for organizers and attendees) using **Clerk**.
- **Modern UI:** An elegant and adaptive interface implemented with **Shadcn UI** (built on Radix).
- **Instant Deployment:** Automated deployment on **Vercel**.

---

## ⚙️ Technology Stack

| Category           | Technology                | Key Components           | Description                                          |
| :----------------- | :------------------------ | :----------------------- | :--------------------------------------------------- |
| **Framework**      | **Next.js 16** (React 19) | Vercel                   | Reactive full-stack framework.                       |
| **Backend/DB**     | **Convex**                | Realtime                 | Serverless database and backend rolled into one.     |
| **AI/ML**          | **Gemini API**            | `@google/generative-ai`  | Content generation and processing.                   |
| **UI/UX**          | **Shadcn UI**             | Radix, Lucide            | Component library for fast and aesthetic interfaces. |
| **Styling**        | **Tailwind CSS 4**        | `clsx`, `tailwind-merge` | Utility-first CSS framework.                         |
| **Authentication** | **Clerk**                 | `@clerk/nextjs`          | Comprehensive solution for user management.          |

---

![]()<img src="demo.gif" alt="demo gif" width="951" height="482" style="display: block; margin-left:100px ;">

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

#### 1. Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/sxidsvit/ai-event-maker.git](https://github.com/sxidsvit/ai-event-maker.git)
    cd ai-event-maker
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

#### 2. Environment Variables Setup

Create a `.env.local` file in the project root and populate it using your API keys:

```bash
# Convex: Database/Backend
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk: Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=

# Google Gemini: AI Functionality
GEMINI_API_KEY=

# Unsplash: For image fetching
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

```

3. Prepare the Database:\*\*

## ![]()<img src="db-structure.png" alt="database structure" width="608" height="738" style="display: block; margin-left:100px ;">

4. Running the Project
   Start the Convex backend and the Next.js application in two separate terminals:

```
# Terminal 1: Start the Convex Dev Server
npx convex dev

# Terminal 2: Start the Next.js application
npm run dev
```

---

[![More detailed documentation on this repository](https://deepwiki.com/badge.svg)](https://deepwiki.com/sxidsvit/ai-event-maker)

---

📬 Connect with me

<img alt="Sergiy Antonyuk | LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />

🙏 Acknowledgements
A heartfelt thank you to [RoadsideCoder](https://www.youtube.com/@RoadsideCoder/featured) for his invaluable contributions
