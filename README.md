# Fiscope - Intelligent Financial Management Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js)](https://nextjs.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple)](https://clerk.com/)

Fiscope is a modern financial management platform offering secure transaction tracking, intelligent budgeting, and comprehensive spending analytics with enterprise-grade security.

## ✨ Key Features

- **🔒 Secure Authentication** - Powered by Clerk with multi-factor auth support
- **📊 Financial Dashboard** - Interactive charts (Bar, Pie) for spending analysis
- **💸 Transaction Management** - CRUD operations with real-time validation
- **📈 Budget Tracking** - Monthly budget planning with progress indicators
- **📱 Responsive Design** - Optimized for all devices with mobile-first approach
- **🔔 Smart Notifications** - Budget alerts and spending milestones
- **🛡️ Security First** - End-to-end encryption and PCI DSS compliance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB 7.0+
- Clerk account (free tier available)

### Installation

1. **Clone Repository**

```bash
git clone https://github.com/yourusername/fiscope.git
cd fiscope
npm install
```

2. **Clone Repository**

```bash
npm install
```

3. **Environment Setup**

-Create .env file:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
MONGO_URI=mongodb://localhost:27017/fiscope

4 . **Start Development Server**

```bash
npm run dev
```

## 🧩 Tech Stack

- Framework: Next.js 14
  -Authentication: Clerk
  -Database: MongoDB + Mongoose ORM
  -Styling: Tailwind CSS + shadcn/ui
  -Visualization: recharts + shadcn
  -Icons: Lucide
  -Hosting: Vercel/Netlify/Docker
