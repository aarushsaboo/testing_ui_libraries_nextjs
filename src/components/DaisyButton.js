// components/DaisyButton.jsx
"use client"

export function DaisyButton({ children, onClick }) {
  return (
    <button className="btn btn-primary h-10" onClick={onClick}>
      {children}
    </button>
  )
}
