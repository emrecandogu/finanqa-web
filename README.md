# Finanqa Web

A modern, responsive website for the Finanqa financial literacy platform. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with Next.js 14 App Router
- Client-side and Server-side components
- Optimized for performance with built-in image optimization
- Built with accessibility in mind
- Mobile-first approach
- SEO friendly
- Custom color palette and branding

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Windows Users (PowerShell)
If you encounter execution policy errors when running npm commands, you can resolve this by running one of these commands in PowerShell:

```powershell
# Option 1: Temporary (Session Only)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Option 2: Permanent (Requires Admin)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/finanqa-web.git
cd finanqa-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
finanqa-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── MobileApp.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   └── utils/
├── public/
│   └── images/
├── scripts/
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean Next.js cache and build files

## Troubleshooting

If you encounter any issues:

1. Clear Next.js cache:
```bash
npm run clean
```

2. Remove node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

3. Rebuild the project:
```bash
npm run build
```

## Image Placeholders

The following image placeholders need to be replaced with actual images:

- `/images/hero-placeholder.jpg`
- `/images/about-placeholder.jpg`
- `/images/feature1.jpg`
- `/images/feature2.jpg`
- `/images/feature3.jpg`
- `/images/app-mockup.jpg`
- `/images/avatar1.jpg`
- `/images/avatar2.jpg`
- `/images/avatar3.jpg`
- `/images/cta-bg.jpg`
- `/images/logo.png`
- `/images/app-store.svg`
- `/images/play-store.svg`
- `/images/twitter.svg`
- `/images/linkedin.svg`
- `/images/instagram.svg`

## Color Palette

- Primary Green: #005652
- Light Green: #17f187
- Cream: #f9f9f3
- Secondary Green: #c8f567

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.