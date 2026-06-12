# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Portfolio E‑Commerce React App

  This repository contains a **React** (TypeScript) e‑commerce portfolio built with **Vite**. The project showcases a simple online shop with a home page, product listings, a shopping cart, and a sign‑in page.

  ## Screenshots

  Below are some screenshots of the application. The images are stored in the `src/assets_readme` folder.

  ![Home Page](src/assets_readme/Screenshot%20(130).png)

  ![Product Page](src/assets_readme/Screenshot%20(131).png)

  ![Cart Page](src/assets_readme/Screenshot%20(132).png)

  ![Sign‑In Page](src/assets_readme/Screenshot%20(133).png)

  ![Responsive View](src/assets_readme/Screenshot%20(134).png)

  <!-- New screenshot added -->
  ![New Feature](src/assets_readme/Screenshot%20(135).png)

  ## How to Run

  ```bash
  # Install dependencies
  npm install

  # Start the development server
  npm run dev
  ```

  Open your browser at `http://localhost:5173` (or the URL shown in the terminal) to view the app.

  ## Project Structure

  ```
  src/
  ├─ assets_readme/   # Screenshots used in this README
  ├─ components/      # Reusable UI components
  ├─ layouts/         # Layout components
  ├─ pages/           # Page components (home, cart, etc.)
  ├─ services/        # API services (login, product)
  ├─ stores/          # Zustand stores for state management
  └─ ...
  ```

  Feel free to explore the code, modify the UI, or add new features!
    languageOptions: {
