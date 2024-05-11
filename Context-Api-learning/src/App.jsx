
import OuterMost from "./Components/OuterMost";
import SomeContextProvider from "./Contexts/SomeContextProvider";


export default function App () {

  return (
    <SomeContextProvider>
      <h1 className="mx-auto w-[100vw] text-center my-[2rem]">
        context is created here
      </h1>
      <OuterMost></OuterMost>
    </SomeContextProvider>
  )
}

