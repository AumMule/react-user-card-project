// src/DarkToggle.jsx
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="px-2 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};
export default DarkModeToggle;
