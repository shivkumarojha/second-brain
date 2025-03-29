import AuthButton from "./components/AuthButtons"
import "./App.css"
function App() {
  function handleClick() {
    console.log("Clicked")
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-8xl bg-gradient-to-r from-red-400 to-red-800 text-transparent bg-clip-text">
        Brainly
      </div>
      <div>
        <AuthButton text="Login" type="primary" onClick={handleClick} />
        <AuthButton text="Sign Up" type="secondary" onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
