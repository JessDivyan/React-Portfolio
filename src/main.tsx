import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// // Dark Mode Toggle Script
// const toggleDarkMode = () => {
//   const htmlElement = document.documentElement;
//   if (htmlElement.classList.contains('dark')) {
//     htmlElement.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//   } else {
//     htmlElement.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//   }
// };

// // Check for saved user preference
// if (localStorage.getItem('theme') === 'dark') {
//   document.documentElement.classList.add('dark');
// }