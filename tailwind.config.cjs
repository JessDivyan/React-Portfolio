/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables dark mode using a class strategy
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primaryBg: "#E6F4F3", // Primary background color in light mode
        secondaryBg: "#088874", // Secondary background color in light mode
        primaryText: "#111827", // Primary text color in light mode
        secondaryText: "#6b7280", // Secondary text color in light mode
        accent: "#3b82f6", // Accent color for interactive elements (e.g., buttons, links)

        // Dark Mode Colors
        dark: {
          primaryBg: "#121212", // Primary background color in dark mode
          secondaryBg: "#1A1A1A", // Secondary background color in dark mode
          primaryText: "#e5e7eb", // Primary text color in dark mode
          secondaryText: "#9ca3af", // Secondary text color in dark mode
          accent: "#3b82f6", // Accent color in dark mode (can be the same or adjusted for dark mode)
        },
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./src/components/**/*.{js,jsx,ts,tsx}",
//     "./src/pages/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
