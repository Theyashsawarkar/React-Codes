import Inner from "./Inner";

export default function Outer() {
  return (
  <div className="mx-auto w-[80vw] h-[80vh] border-sky-800 p-11 flex justify-center items-center border-[3px]">
      <Inner/>
    </div>
  )
}
