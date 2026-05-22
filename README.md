# Futurama Characters App

A responsive two-screen React application that displays characters from the Futurama TV series, built as part of a technical assessment for TheLeftBit.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** — build tool and dev server
- **React Router v6** — client-side routing with nested routes
- **Sass** — component-scoped styles via CSS Modules

## Features

- Browse the full list of Futurama characters
- View detailed information for each character, including their known sayings
- Mark characters as favourites — persisted across sessions via `localStorage`
- Responsive layout: single-column on mobile, side-by-side on screens wider than 600px

## Getting Started

**Prerequisites:** Node.js v22 or later

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`.
