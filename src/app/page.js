"use client"

import { useTheme, DAISYUI_THEMES } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const { shadcnTheme, daisyTheme, toggleShadcnTheme, setDaisyUiTheme } =
    useTheme()
  const [daisyDropdownOpen, setDaisyDropdownOpen] = useState(false)

  return (
    <main className="min-h-screen p-12">
      <h1 className="text-3xl font-bold mb-8">UI Theme Switcher Demo</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* shadcn/ui Section */}
        <section className="p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Shadcn UI</h2>
          <p className="mb-4">Current theme: {shadcnTheme}</p>

          <div className="space-y-4">
            <Button onClick={toggleShadcnTheme}>
              Switch to {shadcnTheme === "light" ? "Dark" : "Light"} Mode
            </Button>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Button Variants:</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
          </div>
        </section>

        {/* DaisyUI Section */}
        <section className="p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">DaisyUI</h2>
          <p className="mb-4">Current theme: {daisyTheme}</p>

          <div className="space-y-4">
            {/* DaisyUI Theme Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1"
                onClick={() => setDaisyDropdownOpen(!daisyDropdownOpen)}
              >
                Select Theme
                <svg
                  width="12px"
                  height="12px"
                  className="inline-block h-2 w-2 fill-current opacity-60 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>

              <ul
                tabIndex={0}
                className={`dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl ${
                  daisyDropdownOpen ? "block" : "hidden"
                }`}
              >
                {DAISYUI_THEMES.map((theme) => (
                  <li key={theme}>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label={theme}
                      value={theme}
                      checked={daisyTheme === theme}
                      onChange={() => {
                        setDaisyUiTheme(theme)
                        setDaisyDropdownOpen(false)
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Button Variants:</h3>
              <div className="flex flex-wrap gap-2">
                <button className="btn">Default</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-link">Link</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
