import { useRef } from "react"
import InputBox from "../components/InputBox"
import AuthButton from "../components/AuthButtons"

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div className="flex items-center justify-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">Log in</div>
        <InputBox ref={usernameRef} type="text" placeholder="Username" />
        <InputBox ref={passwordRef} type="password" placeholder="Password" />
        <AuthButton onClick={() => {}} text="Login" type="primary" />
      </div>
    </div>
  )
}
