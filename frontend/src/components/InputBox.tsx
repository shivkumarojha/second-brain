interface inputType {
  type: string
  placeholder: string
  ref: React.RefObject<HTMLInputElement | null>
}
export default function InputBox({ type, placeholder, ref }: inputType) {
  return (
    <input
      ref={ref}
      className="border-2 rounded-md p-2 my-2"
      type={type}
      placeholder={placeholder}
    />
  )
}
