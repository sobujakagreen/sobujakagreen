# Md. Ariful Islam Sobuj — Portfolio Website

A responsive personal portfolio built with React and regular CSS (Vite for local development). No UI framework is used.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
1. Extract the project ZIP.
2. Open a terminal in the project folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed in your terminal.

## Build for publishing
Run `npm run build`. The production website is created in the `dist` folder. Upload its contents to a static hosting service such as GitHub Pages, Netlify, or Vercel.

## Customize
- Main website content: `src/App.jsx`
- Design and responsive rules: `src/App.css`
- Page title and metadata: `index.html`

The hero graphic is a CSS illustration placeholder. Replace the `.profile-placeholder` block in `src/App.jsx` with an `<img>` element and add your image file in `public/` if you want to use a real portrait.

The print button opens the browser print dialog, where the page can also be saved as a PDF.
