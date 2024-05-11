import Outer from "./Outer"

export default function OuterMost() {
  console.log('outer')
  return (
  <div className="mx-auto w-[90vw] h-[90vh] border-[6px] border-purple-500 p-11 flex justify-center items-center">
      <Outer/>
    </div>
  )
}
