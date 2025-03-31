import Button from "../components/Button"
import BrainIcon from "../icons/BrainIcon"
import PlusIcon from "../icons/PlusIcon"
import ShareIcon from "../icons/ShareIcon"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-2 h-screen">
      <div className="col-span-3 bg-white">
        <h1 className="flex space-x-6 items-center text-3xl font-semibold py-2 px-4 bg-gradient-to-r from-red-400 to-red-900 text-transparent bg-clip-text">
          <BrainIcon />
          Brainly
        </h1>
      </div>
      <div className="col-span-9 bg-gray-50 ">
        <div className="flex justify-between pt-10 pl-4">
          <h1 className="text-2xl font-semibold"> All Notes</h1>
          <div className="flex space-x-3 pr-3">
            <Button
              text="Share Brain"
              variant="secondary"
              startIcon={<ShareIcon />}
            />
            <Button
              text="Add Content"
              variant="primary"
              startIcon={<PlusIcon />}
            />
          </div>
        </div>
        <div className="px-4 py-10">content</div>
      </div>
    </div>
  )
}
