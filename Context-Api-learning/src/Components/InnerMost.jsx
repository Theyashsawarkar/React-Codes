import { useContext } from "react"
import someContext from '../Contexts/SomeContext'


export default function InnerMost() {
  let {name} = useContext(someContext)
  console.log(name)
  return (
  <div className="mx-auto w-[50vw] h-[50vh] border-[5px] border-green-400 p-11 flex justify-center items-center">
      context is consumed here : {name}</div>
  )
}
