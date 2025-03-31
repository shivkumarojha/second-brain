import { useState } from "react"
import AuthButton from "../components/AuthButtons"
import InputBox from "../components/InputBox"

export default function Signup() {
  const [signupData, setSignupData] = useState({
    username: "",
    name: "",
    password: "",
  })
  function handleSignUp() {}
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="text-3xl font-semibold">Sign up</div>
      <InputBox type="text" placeholder="username" />
      <InputBox type="text" placeholder="Full Name" />
      <InputBox type="password" placeholder="password" />
      <AuthButton text="Sign Up" type="primary" onClick={handleSignUp} />
    </div>
  )
}
