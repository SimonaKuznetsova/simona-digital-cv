import React, { useEffect, useState } from "react";
import "../../styles/ThemeSwitch.scss";

const ThemeSwitch = ({theme, setTheme}) => {
  const storageKey = "theme-preference";

  // Хук для хранения текущей темы
//   const [theme, setTheme] = useState('light');

  // Получаем предпочтение темы из localStorage или из системных настроек
  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey);
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  };

  // Устанавливаем тему в localStorage и обновляем DOM
  const setPreference = (themeValue) => {
    localStorage.setItem(storageKey, themeValue);
    reflectPreference(themeValue);
  };

  // Обновляем атрибуты для темы
  const reflectPreference = (themeValue) => {
    document.firstElementChild.setAttribute("data-theme", themeValue);
    document.querySelector("#theme-toggle")?.setAttribute("aria-label", themeValue);
  };

  // Обработчик клика для переключения темы
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setPreference(newTheme);
  };

  // Синхронизируем тему при загрузке
  useEffect(() => {
    reflectPreference(theme);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches: isDark }) => {
        const newTheme = isDark ? "dark" : "light";
        setTheme(newTheme);
        setPreference(newTheme);
      });
  }, [theme]);

  return (
    <button
      id="theme-toggle"
      className="btn-reset theme-toggle icon-button"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={handleClick} // обработка клика
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeSwitch;

