interface AuthButtonProps {
  text: string
  type: "primary" | "secondary"
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defaultButtonStyles =
  "px-32 py-2 m-2 rounded-lg bg-black text-white font-semibold"

const typeStyles = {
  "primary": "bg-blue-400 hover:bg-gradient-to-r from-blue-200 to-blue-900 ",
  "secondary": "bg-red-600 hover:bg-gradient-to-r from-red-200 to-red-900",
}
export default function AuthButton({ text, onClick, type }: AuthButtonProps) {
  return (
    <button
      className={`${defaultButtonStyles} ${typeStyles[type]}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
