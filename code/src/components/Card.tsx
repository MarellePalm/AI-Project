import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col w-[400px] border-2 border-solid border-[#00000010] rounded-md">
      {children}
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
