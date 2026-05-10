# Kapda Gram - Premium Indian Handloom

Welcome to the Kapda Gram repository. This project is a modern, premium, fully responsive informational website for a traditional Indian textile and handloom brand based in Ujjain, Madhya Pradesh, India.

## Tech Stack

*   **Frontend**: Next.js 15 (App Router), React, TypeScript, Tailwind CSS v4
*   **Animations**: Framer Motion
*   **Styling**: Custom modern luxury aesthetic using earthy Indian tones

## Features

*   **Premium UI/UX**: Earthy and luxurious color palette (Ivory, Beige, Sand, Maroon, Deep brown, Muted gold, Terracotta) with modern typography (Inter + Playfair Display).
*   **Cinematic Animations**: Scroll-triggered animations and smooth page transitions powered by Framer Motion.
*   **Contact APIs**: Next.js API Routes (Route Handlers) ready to be integrated with email services (Resend, SendGrid, etc.) for inquiries.
*   **Responsive Design**: Mobile-first architecture ensuring exceptional user experience on all devices.

## Setup Instructions

### 1. Prerequisites

Make sure you have Node.js (>= 18.x) and npm installed.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Instructions (Vercel)

Deploying this static/informational site to Vercel is extremely straightforward:

1.  **Push your code to a GitHub repository.**
    ```bash
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
2.  Log into your [Vercel Dashboard](https://vercel.com/dashboard).
3.  Click **Add New...** -> **Project**.
4.  Select your GitHub repository.
5.  Ensure the Framework Preset is set to **Next.js**.
6.  Click **Deploy**.

Vercel will automatically build your application and provide a live URL.

## Project Structure

*   `/src/app`: Next.js App Router (Pages, Layouts, API Routes).
    *   `/api/inquiries/route.ts`: Endpoint for form submissions.
*   `/src/components`: Reusable UI components.
    *   `/layout`: Navbar, Footer.
    *   `/home`: Hero, Brand Story, Featured Categories.
*   `/public`: Static assets including images.

## Architecture

The project is built with clean architecture in mind. UI components are separated from business logic and page definitions. It serves as a fast, SEO-optimized static site without the need for an external database.
