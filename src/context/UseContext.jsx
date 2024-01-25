import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
      const[theme, setTheme]=useState("dark");

      const ToggleTheme=()=>{
            setTheme((curr)=>curr=="light"?"dark":"light")
      }

      return (
            <ThemeContext.Provider value={{theme,ToggleTheme}}>{children}</ThemeContext.Provider>
      )
}