"use client"

import { useTheme, UI_FRAMEWORKS } from "@/components/ThemeProvider"
import { ShadcnButton } from "@/components/ShadcnButton"
import { DaisyButton } from "@/components/DaisyButton"

export function ThemeControlPanel() {
  const { uiFramework, theme, toggleUiFramework, setNextTheme } = useTheme()

  return (
    <div className="flex flex-col gap-4 p-4 mb-8 border rounded-lg bg-slate-50 dark:bg-slate-800">
      <div>
        <h2 className="text-lg font-bold mb-2">Current Settings:</h2>
        <p>
          <strong>UI Framework:</strong> {uiFramework}
        </p>
        <p>
          <strong>Theme:</strong> {theme}
        </p>
      </div>

      <div className="flex gap-4">
        {uiFramework === UI_FRAMEWORKS.SHADCN ? (
          <ShadcnButton onClick={toggleUiFramework}>
            Switch to DaisyUI
          </ShadcnButton>
        ) : (
          <DaisyButton onClick={toggleUiFramework}>
            Switch to Shadcn
          </DaisyButton>
        )}

        {uiFramework === UI_FRAMEWORKS.SHADCN ? (
          <ShadcnButton onClick={setNextTheme}>Switch Theme</ShadcnButton>
        ) : (
          <DaisyButton onClick={setNextTheme}>Switch Theme</DaisyButton>
        )}
      </div>
    </div>
  )
}
