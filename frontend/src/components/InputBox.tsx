interface inputType {
  type: string
  placeholder: string
}
export default function InputBox({ type, placeholder }: inputType) {
  return (
    <input
      className="border-2 rounded-md p-2 my-2"
      type={type}
      placeholder={placeholder}
    />
  )
}
