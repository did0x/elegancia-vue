# Elegencia Vue

This is a modern and elegant restaurant website built with Vue.js, designed to showcase menu items, allow reservations, and provide information about the restaurant.

## Features

- **Dynamic Menu Display:** Browse various food categories and detailed menu items.
- **Online Reservation System:** Easily book tables through an intuitive form.
- **Image Gallery:** A beautiful gallery showcasing the restaurant's ambiance and dishes.
- **About Us Section:** Learn about the restaurant's history, mission, and team.
- **Contact Information:** Get in touch with the restaurant via contact form or provided details.
- **Responsive Design:** Optimized for various devices, from desktops to mobile phones.

## Technologies Used

- **Vue.js 3:** The progressive JavaScript framework for building user interfaces.
- **Vite:** A fast build tool that provides an excellent development experience.
- **SCSS:** CSS pre-processor for more organized and maintainable stylesheets.
- **ESLint:** For maintaining code quality and consistency.
- **Node.js:** For running development scripts and managing dependencies.

## Project Structure

- `public/`: Static assets like images, favicon, and compiled CSS.
- `src/`: Main application source code.
    - `assets/`: Contains static assets used within Vue components.
    - `components/`: Reusable Vue components.
    - `composables/`: Vue 3 Composition API functions.
    - `layout/`: Layout components (Header, Footer, Main).
    - `pages/`: Vue components representing different pages of the application.
    - `router/`: Vue Router configuration for navigation.

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Run JSON Server (for API simulation)

```bash
npm run server
```

*Note: This command should be run in a separate terminal as it starts a local API server.*

### Compile and Minify for Production

```bash
npm run build
```

### Lint with ESLint

```bash
npm run lint
```