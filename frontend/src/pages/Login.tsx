import Button from "../components/Button"
import InputBox from "../components/InputBox"

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-bold">Log in</div>
      <InputBox type="text" placeholder="Username" />
      <InputBox type="password" placeholder="Password" />
      <Button text="Login" variant="primary" />
    </div>
  )
}
