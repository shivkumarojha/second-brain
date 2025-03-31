import { ReactElement } from "react"

interface ButtonProps {
  variant: "primary" | "secondary"
  text: string
  startIcon?: ReactElement
}

const variantClasses = {
  "primary": "bg-purple-500 text-white",
  "secondary": "bg-purple-200 text-purple-600",
}
export default function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <button className={`${variantClasses[variant] + " " + "flex p-3 rounded-xl items-center"}`}>
      {startIcon}
      {text}
    </button>
  )
}
