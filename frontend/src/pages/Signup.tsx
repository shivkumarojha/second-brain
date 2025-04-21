import { useRef } from "react"
import AuthButton from "../components/AuthButtons"
import InputBox from "../components/InputBox"
import { useNavigate } from "react-router"

export default function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const fullNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  async function handleSignUp() {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    const fullName = fullNameRef.current?.value
    const user = await fetch("http://localhost:3000/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name: fullName,
      }),
    })
    const data = await user.json()
    const token = data.token
    // Save token to local storage
    console.log(token)
    localStorage.setItem("token", token)
    navigate("/choose-default-category")
  }
  return (
    <div className="flex items-center justify-center">
      <div className="h-screen flex flex-col justify-center items-center ">
        <div className="text-3xl font-semibold">Sign up</div>
        <InputBox ref={usernameRef} type="text" placeholder="username" />
        <InputBox ref={fullNameRef} type="text" placeholder="Full Name" />
        <InputBox ref={passwordRef} type="password" placeholder="password" />
        <AuthButton text="Sign Up" type="primary" onClick={handleSignUp} />
      </div>
    </div>
  )
}
