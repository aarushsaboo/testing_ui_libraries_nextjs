"use client"

import { ThemeControlPanel } from "@/components/ThemeControlPanel"
import { useTheme, UI_FRAMEWORKS } from "@/components/ThemeProvider"
import { ShadcnButton } from "@/components/ShadcnButton"
import { DaisyButton } from "@/components/DaisyButton"

export default function Home() {
  const { uiFramework } = useTheme()

  return (
    <main className="min-h-screen p-12">
      <h1 className="text-3xl font-bold mb-6">UI Framework Switcher</h1>

      <ThemeControlPanel />

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Button Examples</h2>
          <div className="flex flex-wrap gap-4">
            {uiFramework === UI_FRAMEWORKS.SHADCN ? (
              <>
                <ShadcnButton>Default Button</ShadcnButton>
                <ShadcnButton className="bg-red-500 hover:bg-red-600">
                  Custom Color
                </ShadcnButton>
                <ShadcnButton variant="outline">Outline</ShadcnButton>
                <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              </>
            ) : (
              <>
                <DaisyButton>Default Button</DaisyButton>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-outline">Outline</button>
              </>
            )}
          </div>
        </div>

        {/* Add more UI elements here to test different components */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Cards & Other Elements</h2>
          {uiFramework === UI_FRAMEWORKS.SHADCN ? (
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <h3 className="text-lg font-medium">Shadcn Card</h3>
              <p className="mt-2">This is styled using Shadcn conventions</p>
            </div>
          ) : (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">DaisyUI Card</h2>
                <p>This is styled using DaisyUI conventions</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
