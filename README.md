# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Landing Page con React + Vite + Tailwind + WordPress (REST API)

Este mi pequeño poryecto es una **landing page** desarrollada con **React** usando **Vite** como entorno de desarrollo, **Tailwind CSS** para los estilos y un **backend en WordPress** que proporciona contenido dinámico a través de su **REST API**.

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- Fetch / Axios para consumo de APIs

## 📁 Estructura de componentes

- `Banner.jsx`: muestra una sección de bienvenida, con contenido hardcodeado.
- `Servicios.jsx`: obtiene datos dinámicos desde WordPress mediante la API `/wp-json/wp/v2/posts?categories=servicios`.

## 🌐 Ejemplo de consumo de API

El componente `Servicios` obtiene posts de la categoría `servicios` desde WordPress:

```js
useEffect(() => {
  fetch("http://landing-wp.local/wp-json/wp/v2/posts?categories=servicios")
    .then((res) => res.json())
    .then((data) => setServicios(data))
    .catch((err) => console.error("Error al cargar servicios:", err));
}, []);
