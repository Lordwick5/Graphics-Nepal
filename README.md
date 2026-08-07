# Graphics Nepal

Marketing website for **Graphics Nepal** (formerly Nepal Art) — a Kathmandu-based printing & graphics business serving customers since 2000. Built with Next.js, it showcases the company's product catalog and provides a contact form that emails inquiries to the business and stores them in Supabase.

## Features

- **Home, About, Products, and Contact pages** built on the Next.js App Router
- **Product catalog** of 24+ printing & graphics services (business cards, stamps, banners, ID cards, stickers, canvas prints, LED sign boards, and more)
- **Contact form API** (`/api/contact`) that:
  - Validates submissions and stores them in a Supabase `contacts` table
  - Sends a notification email (with optional file attachment) via [Resend](https://resend.com)
- SEO essentials: per-page metadata, `sitemap.ts`, `robots.ts`, and a web app `manifest.ts`
- Responsive navbar with a mobile menu
- Styled with Tailwind CSS v4

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Supabase](https://supabase.com) — stores contact form submissions
- [Resend](https://resend.com) — transactional email delivery

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project with a `contacts` table (`name`, `email`, `message` columns)
- A [Resend](https://resend.com) API key with a verified sending domain

### Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/Lordwick5/Graphics-Nepal.git
   cd Graphics-Nepal
   npm install
   ```

2. Create a `.env.local` file in the project root with the following variables:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   RESEND_API_KEY=your-resend-api-key
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script          | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Build the app for production       |
| `npm run start` | Run the production build           |
| `npm run lint`  | Lint the codebase with ESLint      |

## Project Structure

```
app/
├── page.tsx           # Home page
├── about/              # About page
├── products/           # Product catalog page
├── contact/            # Contact form page
├── api/contact/        # Contact form API route (Supabase + Resend)
├── sitemap.ts          # Dynamic sitemap
├── robots.ts           # Robots.txt config
└── manifest.ts         # Web app manifest
components/
└── navbar.tsx           # Site navigation
lib/
└── supabase.ts          # Supabase client
```

## Deployment

The easiest way to deploy this app is with [Vercel](https://vercel.com/new), the platform built by the creators of Next.js. Make sure to configure the environment variables listed above in your deployment settings.

## License

This project is privately maintained for Graphics Nepal. All rights reserved.
