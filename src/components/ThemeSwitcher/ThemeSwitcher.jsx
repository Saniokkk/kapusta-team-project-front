import { useEffect } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import useLocalStorage from "use-local-storage";
import s from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={s.switcher}>
      <input
        type="checkbox"
        checked={theme === "dark"}
        className={s.checkbox}
        id="theme-switcher"
        onChange={toggleTheme}
      />

      <label htmlFor="theme-switcher" className={s.label}>
        <BsFillSunFill className={s.iconSun} width={20} />
        <BsMoonStarsFill className={s.iconMoon} width={20} />

        <div className={s.ball}></div>
      </label>
    </div>
  );
};
