import AuthButton from "./components/AuthButtons"
import "./App.css"
import { useNavigate } from "react-router"
function App() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-8xl bg-gradient-to-r from-red-400 to-red-800 text-transparent bg-clip-text">
        Brainly
      </div>
      <div>
        <AuthButton
          text="Login"
          type="primary"
          onClick={() => navigate("/login")}
        />
        <AuthButton
          text="Sign Up"
          type="secondary"
          onClick={() => navigate("/signup")}
        />
      </div>
    </div>
  )
}

export default App
