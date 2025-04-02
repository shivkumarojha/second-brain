interface inputType {
  type: string
  placeholder: string
  reference: React.RefObject<HTMLInputElement | null>
}
export default function InputBox({ type, placeholder, reference }: inputType) {
  return (
    <input
      ref={reference}
      className="border-2 rounded-md p-2 my-2"
      type={type}
      placeholder={placeholder}
    />
  )
}
