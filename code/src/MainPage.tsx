import { useState } from "react"
import Card from "./components/Card"
import { auth } from "./FirebaseConfig"

interface Expense {
  name: string
  cost: number
}

function MainPage() {
  const [people, setPeople] = useState<string[]>(["aadu", "beedu"])
  const [expenses, setExpenses] = useState<Expense[]>([{
    name: "bruh",
    cost: 99
  }])
  const [nameField, setNameField] = useState<string>("")
  const [descField, setDescField] = useState<string>("")
  const [amountField, setAmountField] = useState<string>("")
  const [enabledUsers, setEnabledUsers] = useState<number[]>([])

  function handleAddUser() {
    setPeople([...people, nameField])

    console.log(people);

  }

  function handleAddExpense() {
    const num = Number(amountField)

    const expense: Expense = {
      name: descField,
      cost: isNaN(num) ? 0 : num,
    }

    setExpenses([...expenses, expense])

    console.log(expenses);

  }

  function removeUser(index: number) {
    setPeople(people.filter((_, i) => i != index))
    setEnabledUsers(enabledUsers
      .filter((_, i) => {
        return i != index
      })
      .map((x) => {
        if (x > index) return x - 1
        return x
      }))
  }

  function removeExpense(index: number) {
    setExpenses(expenses.filter((_, i) => i != index))
  }

  function handleCheckbox(index: number) {
    if (enabledUsers.includes(index)) {
      setEnabledUsers(enabledUsers.filter((_, i) => i != index))
    } else {
      setEnabledUsers([...enabledUsers, index])
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card title={"Add People"} className={"bg-containerBlue text-onContainerBlue"}>
        <div className="flex justify-between gap-2">
          <input type="text" value={nameField} onChange={(e) => setNameField(e.target.value)} placeholder="Enter Name" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
          <input type="button" value="Add" onClick={handleAddUser} className="bg-black text-white py-2 px-5 rounded-md hover:cursor-pointer" />
        </div>

        <div className="flex gap-2 mt-3 w-full flex-wrap">
          {people.map((x, i) =>
            <div className="flex gap-2 items-center bg-containerBlue py-2 rounded-2xl px-4">
              <p className="">{x}</p>
              <p onClick={() => removeUser(i)} className="text-md font-bold hover:cursor-pointer">x</p>
            </div>
          )}
        </div>
      </Card>

      <Card title={"Add Expense"} className={"bg-containerGreen text-onContainerGreen"}>
        <div className="flex flex-col gap-2">
          <input type="text" value={descField} onChange={(e) => setDescField(e.target.value)} placeholder="Description" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
          <input type="text" value={amountField} onChange={(e) => setAmountField(e.target.value)} placeholder="Amount" className="p-2 w-full border-2 border-solid border-[#00000020] rounded-md" />
          <input type="button" onClick={handleAddExpense} value="Add Expenses" className="bg-black hover:cursor-pointer text-white py-2 px-5 rounded-md" />
        </div>
      </Card>

      <Card title={"Expenses"} className={"bg-containerYellow text-onContainerYellow"}>
        <div className="flex gap-2 w-full flex-col">
          {expenses.map((x, i) =>
            <div className="bg-containerYellow py-2 rounded-md w-full flex justify-between px-4 items-center">
              <p>{x.name} - €{x.cost}</p>
              <p className="text-2xl font-bold hover:cursor-pointer" onClick={() => removeExpense(i)}>x</p>
            </div>
          )}
        </div>
      </Card>

      <Card title={"Split Summary"} className={"bg-containerPurple text-onContainerPurple"}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {people.map((dude, i) =>
              <div className="flex gap-2">
                <input type="checkbox" onChange={() => handleCheckbox(i)} checked={enabledUsers.includes(i)} />
                <p>{dude}</p>
              </div>
            )}

          </div>

          <div className="flex flex-col gap-2">
            {enabledUsers.map((x) =>
              <p className="bg-containerPurple py-2 px-4 rounded-md">{people[x]} - €{expenses.reduce((sum, i) => sum + i.cost, 0) / enabledUsers.length}</p>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MainPage
