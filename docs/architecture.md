# Photographer Portfolio Architecture

## System Overview

This application is an Angular-based photographer portfolio website with integrated Playwright testing capabilities. The architecture follows a component-based design with clear separation of concerns.

## Subsystems

### 1. Angular Frontend

The core of the application is built with Angular, providing a responsive and interactive user interface.

- **App Component**: Root component that defines the main layout structure
- **Module System**: Angular modules for organizing code and dependencies
- **Routing**: Client-side navigation between different pages
- **Services**: (Potential future addition for data management)

### 2. UI Component Library

The application uses Angular Material for consistent UI components and styling.

- **Material Components**: Pre-built UI elements like buttons, cards, and form controls
- **Custom Components**: Header and footer components for consistent layout
- **Styling**: Custom CSS extending Material Design

### 3. Page Components

The application is organized into distinct page components:

- **Home Page**: Introduction with featured photos
- **Gallery Page**: Expanded photo collection with interactive viewing
- **Contact Page**: Form for user inquiries with email functionality
- **Playwright Elements Page**: Collection of UI elements for testing

### 4. Form Handling

Forms are implemented using Angular's Reactive Forms approach:

- **Form Models**: TypeScript models defining form structure
- **Validation**: Client-side validation rules
- **Submission Logic**: Form processing and email functionality

### 5. Testing Infrastructure

The project includes comprehensive testing capabilities:

- **Playwright Integration**: End-to-end testing framework
- **Test ID System**: Standardized data-testid attributes following CCL guidelines
- **Test Elements**: Dedicated page with various UI elements for testing
- **Test Scripts**: C# test scripts in the PlayWright directory

### 6. Deployment Configuration

The application is configured for deployment to GitHub Pages:

- **Build Configuration**: Angular build settings in angular.json
- **GitHub Actions**: CI/CD workflow for automated deployment
- **Routing Support**: Configuration for client-side routing on GitHub Pages

## Directory Structure

```
photographer-portfolio/
├── src/
│   ├── app/
│   │   ├── components/       # Shared UI components
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/            # Page components
│   │   │   ├── home/
│   │   │   ├── gallery/
│   │   │   ├── contact/
│   │   │   └── playwright-elements/
│   │   ├── app.component.ts  # Root component
│   │   └── app.module.ts     # Main module
│   ├── assets/               # Static assets
│   │   └── images/
│   ├── index.html            # Main HTML file
│   └── styles.css            # Global styles
├── PlayWright/               # Playwright testing
│   ├── PhotoPortfolioTests.cs
│   └── UnitTest1.cs
├── docs/                     # Documentation
├── .github/workflows/        # CI/CD configuration
├── angular.json              # Angular configuration
└── package.json              # Dependencies
```

## Component Interaction

1. **User Navigation Flow**:
   - Header component provides navigation links
   - Router handles URL changes and loads appropriate page components
   - Each page component manages its own state and UI

2. **Gallery Interaction**:
   - Gallery displays photos in a responsive grid
   - Click events trigger photo expansion
   - Overlay system for displaying expanded photos

3. **Form Submission**:
   - Contact form collects user input
   - Validation ensures data quality
   - Form submission triggers email functionality

## Testing Approach

The application is designed with testability in mind:

1. **Test ID Convention**:
   - All interactive elements have data-testid attributes
   - IDs follow the `component-elementName-type` pattern
   - Consistent naming across similar components

2. **Playwright Elements Page**:
   - Dedicated page with various UI elements
   - Used for testing different interaction patterns
   - Includes form controls, buttons, tables, etc.

3. **Test Scripts**:
   - C# test scripts using Playwright
   - Navigate through the application
   - Interact with elements using test IDs
   - Verify expected behavior

## Future Enhancements

Potential areas for future development:

1. **Backend Integration**: Add a backend service for form processing
2. **Authentication**: User login for admin functionality
3. **CMS Integration**: Dynamic content management
4. **Image Optimization**: Lazy loading and responsive images
5. **Analytics**: User behavior tracking