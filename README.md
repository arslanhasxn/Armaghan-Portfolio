# Armaghan Portfolio

A React + Vite rebuild of the [Framer portfolio](https://armaghanhasan.framer.website/), redesigned with [shadcn/ui](https://ui.shadcn.com/).

## Stack

- React 19 + Vite 7
- TypeScript
- Tailwind CSS + shadcn/ui
- React Router
- Framer Motion
- Lenis (smooth scroll)
- Lucide icons

## Features

- shadcn/ui component system (Button, Card, Command, Dialog, Badge, etc.)
- Fixed bottom dock navigation (Projects, About, Contact, Resume + Search)
- Omnibar command palette search (`⌘K` / `Ctrl+K`)
- Resume page with embedded PDF preview + download
- Theme modes: System (default), Light, Dark
- Fully responsive layout

## Getting started

```bash
npm install
npm run dev
```

## Resume file

Add your PDF to:

```text
public/resume.pdf
```

The resume page auto-detects it for preview and download.

## Pages

- `/` — Home
- `/portfolio` — Projects
- `/portfolio/:slug` — Case studies
- `/about` — About Me
- `/contact` — Contact
- `/resume` — Resume
