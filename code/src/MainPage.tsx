import Card from "./components/Card"
import { auth } from "./FirebaseConfig"

interface Expense {
  name: string,
  cost: number,
  type: string
}

const people = [
  "aadu",
  "beedu",
  "pede"
]

const expenses: Expense[] = [
  {
    name: "???",
    cost: 21397923,
    type: "hitman"
  },
  {
    name: "pornhub premium",
    cost: 99.99,
    type: "family"
  }
]

let total = expenses.reduce((sum, x) => sum + x.cost, 0)

function MainPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-8xl">{auth.currentUser?.email}</p>
      <Card title={"Add People"} className={"bg-containerBlue text-onContainerBlue"}>
          <div className="flex justify-between gap-2">
            <input type="text" name="" id="" placeholder="Enter Name" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
            <input type="button" value="Add" className="bg-black text-white py-2 px-5 rounded-md" />
          </div>
      </Card>

      <Card title={"Add Expense"} className={"bg-containerGreen text-onContainerGreen"}>
        <div className="flex flex-col gap-2">
          <input type="text" name="" id="" placeholder="Description" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
          <input type="text" name="" id="" placeholder="Amount" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
          <input type="button" value="Add Expenses" className="bg-black text-white py-2 px-5 rounded-md" />
        </div>
      </Card>

      <Card title={"Expenses"} className={"bg-containerYellow text-onContainerYellow"}>
        <div className="flex flex-col gap-2">
          {expenses.map(x =>
            <div className="flex justify-between items-center w-full bg-[#fef9e0] p-3 rounded-md">
              <p>{x.name} - €{x.cost} (Type: {x.type})</p>
              <p className="size-6 font-bold">x</p>
            </div>)}
        </div>
      </Card>

      <Card title={"Split Summary"} className={"bg-containerPurple text-onContainerPurple"}>
        <div className="flex flex-col gap-2">
          <p className="text-onContainerPurple text-xl text-center">Each person owes: €{total}</p>
          {people.map(x =>
            <p className="bg-[#FAF5FF] p-2">{x}: €{total / people.length}</p>
          )}
        </div>
      </Card>
    </div>
  )
}

export default MainPage
