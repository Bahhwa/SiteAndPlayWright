# Photographer Portfolio - Angular Application

This is an Angular-based photographer portfolio website with three main pages:
- Home page with a small gallery of 5 photos
- Gallery page with a larger collection of photos
- Contact page with a form

## Project Structure

```
photographer-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── gallery/
│   │   │   └── contact/
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   └── images/
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

## Setup Instructions

1. Install Node.js and npm if not already installed
2. Install Angular CLI: `npm install -g @angular/cli`
3. Navigate to the project directory
4. Install dependencies: `npm install`
5. Start the development server: `ng serve`
6. Open your browser and navigate to `http://localhost:4200`

## GitHub Pages Deployment

### Automatic Deployment
This project is set up with GitHub Actions for automatic deployment:
1. Push changes to the `main` branch
2. GitHub Actions will build and deploy to the `gh-pages` branch
3. The site will be available at `https://[your-username].github.io/photographer-portfolio/`

### Manual Deployment
1. Build the project: `npm run deploy`
2. The output will be in the `dist/photographer-portfolio` directory
3. Push this directory to the `gh-pages` branch of your repository

## Features

- Responsive design using Angular Material components
- Navigation between pages using Angular Router
- Contact form with validation using Angular Reactive Forms
- Photo gallery with placeholder images

## Notes

- For a production site, replace the placeholder images with actual photos
- The contact form currently only logs submissions to the console
- Angular Material is used for UI components like buttons, cards, and form fields