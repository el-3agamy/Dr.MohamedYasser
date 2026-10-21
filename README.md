<div align="center">

<img src="public/dr.jpeg" alt="Dr. Mohamed Yasser Logo" width="120" style="border-radius: 50%" />

# 🦷 Dr. Mohamed Yasser — Dental Clinic Website

**A modern, bilingual dental clinic website built with Next.js 16, TypeScript, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)](https://dr-mohamed-yasser-swart.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[🌐 Live Demo](https://dr-mohamed-yasser-swart.vercel.app) &nbsp;|&nbsp; [📬 Contact](#contact)

</div>

---

## 📖 Overview

A fully production-ready, SEO-optimized website for **Dr. Mohamed Yasser**, a dentist based in Egypt (Gharbia Governorate — Bassyon & Tanta). The site supports **bilingual content (English 🇬🇧 & Arabic 🇪🇬)** with full RTL layout for Arabic, an **AI-powered dental chat assistant**, **lead capture via WhatsApp form**, and **real-time notifications** to the doctor via Telegram Bot.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual (EN / AR)** | Full i18n with `next-intl`; Arabic uses a custom ExpoArabic font with RTL layout |
| 🤖 **AI Chat Widget** | Google Gemini-powered dental assistant chatbot embedded as a floating widget |
| 📋 **Lead Capture Form** | WhatsApp-based appointment form that saves leads to Google Sheets |
| 📲 **Telegram Notifications** | Instant Telegram bot alerts sent to the doctor on every new lead submission |
| 🗺️ **Multi-Branch Locations** | Interactive map cards for Bassyon, Tanta, and Nasr City branches |
| 🦷 **Services Showcase** | Detailed cards for 6 dental services with descriptions |
| 😁 **Smile Transformations** | Before/after smile gallery section |
| 📈 **SEO Optimized** | Dynamic `generateMetadata`, `sitemap.ts`, `robots.ts`, OpenGraph & canonical tags |
| 🎨 **Custom Fonts** | ExpoArabic (Arabic) and Geist Sans/Mono (Latin) via Next.js font optimization |
| ⚡ **Deployed on Vercel** | Zero-config production deployment with edge CDN |

---

## 🏗️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **i18n** | [next-intl 4](https://next-intl-docs.vercel.app/) |
| **AI** | [Google Gemini API](https://ai.google.dev/) (`@google/genai`) |
| **CRM / Leads** | [Google Sheets API v4](https://developers.google.com/sheets/api) via `googleapis` |
| **Notifications** | [Telegram Bot API](https://core.telegram.org/bots/api) |
| **SMS / WhatsApp** | [Twilio](https://www.twilio.com/) (configured) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
dr.mohamed_yasser/
├── public/                  # Static assets (images, fonts)
│   └── fonts/               # ExpoArabic custom font files
├── src/
│   ├── app/
│   │   ├── [locale]/        # Locale-based routing (en / ar)
│   │   │   ├── layout.tsx   # Root layout with Navbar, Footer & i18n
│   │   │   ├── page.tsx     # Home page assembly
│   │   │   ├── services/    # Dynamic service detail pages
│   │   │   └── dashboard/   # Admin dashboard (protected)
│   │   ├── _components/     # Shared UI components
│   │   │   ├── HomeComp/    # Hero section + Navbar
│   │   │   ├── About/       # Doctor's bio section
│   │   │   ├── Education/   # Education & credentials
│   │   │   ├── Smile/       # Before/after smile gallery
│   │   │   ├── Services/    # Dental services cards
│   │   │   ├── Locations/   # Multi-branch map cards
│   │   │   ├── WhatsAppFrom/# Lead capture contact form
│   │   │   ├── DentalChatWidget/ # AI Gemini chatbot widget
│   │   │   └── Footer/      # Site footer
│   │   ├── api/
│   │   │   └── chat/        # Gemini AI chat API route
│   │   ├── actions.ts       # Server actions (Sheets + Telegram)
│   │   ├── sitemap.ts       # Dynamic XML sitemap
│   │   └── robots.ts        # Robots.txt rule generator
│   ├── i18n/                # next-intl routing & config
│   ├── messages/
│   │   ├── en.json          # English translations
│   │   └── ar.json          # Arabic translations
│   └── data/                # Static data (services, locations, etc.)
├── next.config.ts           # Next.js + next-intl plugin config
├── postcss.config.mjs       # PostCSS / Tailwind config
└── tsconfig.json            # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**
- A Google Cloud project with Sheets API enabled
- A Telegram bot token
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dr.mohamed_yasser.git
cd dr.mohamed_yasser
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# Google Sheets (Lead Capture)
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id

# Telegram Bot (Real-time Notifications)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Google Gemini AI (Chat Widget)
GEMINI_API_KEY=your_gemini_api_key

# Twilio (optional SMS/WhatsApp)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will redirect to the default locale (`/en` or `/ar`).

---

## 🌐 Internationalization

The site uses **`next-intl`** with locale-based routing:

| Route | Language |
|---|---|
| `/en` | English (LTR) — Geist font |
| `/ar` | Arabic (RTL) — ExpoArabic font |

Translation files live in `src/messages/en.json` and `src/messages/ar.json`. To add a new language, add its JSON file and register the locale in `src/i18n/routing.ts`.

---

## 🦷 Dental Services

The website showcases the following treatments:

- 🦷 **Orthodontics** — Metal braces & clear aligners
- 👑 **Crown & Bridge** — Dental restorations
- 👶 **Pediatric Dentistry** — Child-friendly dental care
- 🔬 **Root Canal Treatment** — Pain relief & tooth saving
- ✨ **Teeth Whitening** — Advanced whitening solutions
- 🦷 **Wisdom Tooth Treatment** — Extraction & management

---

## 📋 Lead Flow Architecture

```
Patient fills WhatsApp form
         │
         ▼
  Server Action (actions.ts)
         │
    ┌────┴────┐
    │         │
    ▼         ▼
Google     Telegram Bot
Sheets  ──► Notification
(CRM)       to Doctor
```

Each lead captures: **Full Name**, **WhatsApp Number**, **Submission Time** (Egypt timezone, `Africa/Cairo`).

---

## 🤖 AI Chat Widget

An intelligent floating chat assistant powered by **Google Gemini** is embedded on the site. It:

- Answers patient questions about dental services in **English and Arabic**
- Provides a **"Chat on WhatsApp"** escalation button for complex inquiries
- Maintains conversation context throughout the session

The API route lives at `src/app/api/chat/`.

---

## 📍 Clinic Locations

| Branch | City |
|---|---|
| Qaransho Branch | Bassyon City, Gharbia |
| Kharsit Branch | Tanta City, Gharbia |
| Al-Nahas Branch | Nasr City, Cairo |

---

## 🔍 SEO

- **Dynamic metadata** per locale (`generateMetadata`) with OpenGraph tags
- **Canonical URLs** pointing to the Vercel deployment
- **XML Sitemap** auto-generated at `/sitemap.xml`
- **Robots.txt** configured at `/robots.txt`
- **Structured `hreflang`** alternates for `ar` and `en`

---

## 🏗️ Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

The project is configured for **zero-config deployment on Vercel**. Push to your main branch and Vercel will handle the rest.

> ⚠️ Make sure all environment variables are set in the Vercel project settings before deploying.

---

## 📝 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create optimized production build |
| `npm start` | Run the production server |

---

## 📬 Contact

**Dr. Mohamed Yasser Dental Clinic**
- 🌐 Website: [dr-mohamed-yasser-swart.vercel.app](https://dr-mohamed-yasser-swart.vercel.app)
- 📍 Bassyon City, Gharbia Governorate, Egypt
- 📍 Tanta City, Gharbia Governorate, Egypt
- 📍 Nasr City, Cairo, Egypt

---

<div align="center">

Made with ❤️ for better dental healthcare in Egypt.

</div>
