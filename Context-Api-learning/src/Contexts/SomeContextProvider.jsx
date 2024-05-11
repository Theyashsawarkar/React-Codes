import someContext from "./SomeContext";

export default function someContextProvider({children}) {
  return (
  <someContext.Provider value={{name:"yahoo"}}>
    {children}
    </someContext.Provider>
  )
}
