"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

// Available DaisyUI themes
export const DAISYUI_THEMES = [
  "default",
  "retro",
  "cyberpunk",
  "valentine",
  "aqua",
]

export function ThemeProvider({ children }) {
  // For shadcn theme (light/dark)
  const [shadcnTheme, setShadcnTheme] = useState("light")

  // For DaisyUI theme
  const [daisyTheme, setDaisyTheme] = useState("default")

  // Apply shadcn theme when it changes
  useEffect(() => {
    const root = window.document.documentElement

    if (shadcnTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [shadcnTheme])

  // Apply DaisyUI theme when it changes
  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute("data-theme", daisyTheme)
  }, [daisyTheme])

  // Toggle shadcn theme between light and dark
  const toggleShadcnTheme = () => {
    setShadcnTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  // Set specific DaisyUI theme
  const setDaisyUiTheme = (theme) => {
    setDaisyTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        shadcnTheme,
        daisyTheme,
        toggleShadcnTheme,
        setDaisyUiTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Hook to use theme context
export const useTheme = () => useContext(ThemeContext)
