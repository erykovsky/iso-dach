# Iso-Dach Website

A modern, responsive website for Iso-Dach, a professional roofing and insulation services company. Built with Next.js 15 and Tailwind CSS.

## Features

- 🏠 Modern, responsive design
- 🇵🇱 Polish language interface
- 📱 Mobile-friendly navigation
- 📝 Blog system
- 📊 Service showcase
- ⚡ Fast page loads with Next.js App Router
- 🎨 Customized styling with Tailwind CSS

## Pages

- Homepage (`/`)
- Services (`/uslugi`)
- Benefits (`/korzysci`)
- Blog (`/blog`)
- Quote Request (`/wycena`)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with latest features
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Nodemailer](https://nodemailer.com/) - Email functionality

## Next.js 15 Features

This project leverages the latest features of Next.js 15, including:

- Improved performance with the new React 19 compiler
- Enhanced Server Components for better server-side rendering
- Simplified data fetching with the new `unstable_cache` API
- Improved image optimization
- Better error handling and debugging tools

For more details on Next.js 15 features, visit the [Next.js blog](https://nextjs.org/blog).

## Project Structure

```
iso-dach/
├── app/
│   ├── api/
│   ├── blog/
│   ├── korzysci/
│   ├── uslugi/
│   ├── wycena/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
└── styles/
```

## Development

The project uses Next.js App Router for routing and Server Components for improved performance. Each page is organized in its respective directory under the `app` folder.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

MIT License - see LICENSE file for details

## Contact

For any questions or concerns, please open an issue in this repository.