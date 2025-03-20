import "./App.css"
import Button from "./components/Button"
import PlusIcon from "./icons/PlusIcon"
import ShareIcon from "./icons/ShareIcon"
function App() {
  return (
    <div>
      <div className="text-2xl text-amber-500">brainly</div>
      <div className="flex w-full">
        <Button text="Add Content" startIcon={<PlusIcon />} variant="primary" />
        <Button text="Share" variant="secondary" startIcon={<ShareIcon />} />
      </div>
    </div>
  )
}

export default App
