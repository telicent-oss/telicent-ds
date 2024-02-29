import React from "react";

const useTheme = () => {
  const storedTheme = localStorage.getItem("theme");

  document.body.classList.add("theme__bg", "theme__text");

  const addDarkClass = () => {
    document.documentElement.classList.add("dark");
  };

  const removeDarkClass = () => {
    document.documentElement.classList.remove("dark");
  };

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  if (storedTheme === "dark" || !("theme" in localStorage)) {
    addDarkClass();
  } else removeDarkClass();

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked } = target;

    if (checked) {
      setTheme("dark");
      addDarkClass();
    } else {
      setTheme("light");
      removeDarkClass();
    }
  };

  return { setTheme, storedTheme, toggleTheme };
};

export default useTheme;
