import React, { useEffect } from "react";
import { z } from "zod";
import { type PaletteMode as Theme } from "@mui/material";

const DEFAULT_THEME = "dark";
const TELICENT_THEME = "telicent-theme";
const ThemeEnum = z.enum(["dark", "light"]);
type ThemeEnum = z.infer<typeof ThemeEnum>;

const useTeliTheme = () => {
  const getTheme = (): Theme => {
    const savedTheme = localStorage.getItem(TELICENT_THEME);
    const schemaResults = ThemeEnum.safeParse(savedTheme);
    return schemaResults.success ? schemaResults.data : DEFAULT_THEME;
  };

  const storedTheme = getTheme();

  const addDarkClass = () => {
    document.documentElement.classList.add("dark");
  };

  const removeDarkClass = () => {
    document.documentElement.classList.remove("dark");
  };

  const setTheme = (theme: Theme): void => {
    localStorage.setItem(TELICENT_THEME, theme);
    if (theme === "dark") {
      addDarkClass();
    } else {
      removeDarkClass();
    }
  };

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

  useEffect(() => {
    setTheme("dark");
    document.body.classList.add("theme__bg", "theme__text");
  }, []);

  return { setTheme, storedTheme, toggleTheme, addDarkClass };
};

export default useTeliTheme;
export type { Theme };
