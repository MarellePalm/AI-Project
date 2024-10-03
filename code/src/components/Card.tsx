import { ReactNode } from "react"

function Card(props: { title: string, className: string, children: ReactNode }) {
  return (
    <div className="flex flex-col w-[400px] border-2 border-solid border-[#00000010] rounded-md">
      <Header text={props.title} className={props.className} />
      <div className="p-4">
        {props.children}
      </div>
    </div>
  )
}

export function Header(props: { text: string, className: string }) {
  return (
    <>
      <p className={`${props.className} text-2xl p-5`}>{props.text}</p>
    </>
  )
}

export default Card
