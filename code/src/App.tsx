function App() {
  return (
    <div className="flex flex-col">
      <Header text="Add People" color="bg-[#DBEAFE]"/>
      <input type="text" name="" id="" placeholder="" />

    </div>
  )
}

function Header(props: { text: string, color: string }) {
  return (
    <>
      <p className={`${props.color}`}>{props.text}</p>
    </>
  )
}

export default App
