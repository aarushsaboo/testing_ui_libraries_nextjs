"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create context to hold our UI framework and theme state
const ThemeContext = createContext()

export const UI_FRAMEWORKS = {
  SHADCN: "shadcn",
  DAISYUI: "daisyui",
}

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  VALENTINE: "valentine",
}

export function ThemeProvider({ children }) {
  const [uiFramework, setUiFramework] = useState(UI_FRAMEWORKS.SHADCN)
  const [theme, setTheme] = useState(THEMES.LIGHT)

  // Apply theme when it changes
  useEffect(() => {
    const root = window.document.documentElement

    // Remove all potential theme classes
    root.classList.remove("light", "dark", "valentine")

    // Handle shadcn themes
    if (uiFramework === UI_FRAMEWORKS.SHADCN) {
      // shadcn uses the class 'dark' for dark mode, otherwise light
      if (theme === THEMES.DARK) {
        root.classList.add("dark")
      }
    }
    // Handle daisyUI themes
    else if (uiFramework === UI_FRAMEWORKS.DAISYUI) {
      // daisyUI uses data-theme attribute
      root.setAttribute("data-theme", theme)
    }
  }, [uiFramework, theme])

  const toggleUiFramework = () => {
    setUiFramework((prev) =>
      prev === UI_FRAMEWORKS.SHADCN
        ? UI_FRAMEWORKS.DAISYUI
        : UI_FRAMEWORKS.SHADCN
    )
  }

  const setNextTheme = () => {
    setTheme((prev) => {
      if (prev === THEMES.LIGHT) return THEMES.DARK
      if (prev === THEMES.DARK) return THEMES.VALENTINE
      return THEMES.LIGHT
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        uiFramework,
        theme,
        toggleUiFramework,
        setNextTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
