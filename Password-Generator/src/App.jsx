import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [password , setPassword] = useState("") ;
  const [length , setLength] = useState(8)
  const [isChar , setIsChar] = useState(true) ;
  const [isNum , setIsNum] = useState(true) ;

  const passwordGenerator = useCallback(() => {

    let pass = "" ;

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

    str += isChar ? "!@#$%^&*()_~`" : "" ;
    str += isNum ? "0123456789" : "" ;

    for(let i = 0 ; i <= length ; i++) {
      let index = Math.floor(Math.random()*str.length) ;
      pass += str[index] ;
    }
    setPassword(pass) ;

  },[length , isChar , isNum , setPassword])

  useEffect(() => {
    passwordGenerator() ;
  },[length , isChar , isNum , passwordGenerator]) ;


  const passwordRef = useRef(null) ;

  const copyPasswordToClipboard = useCallback(() => {
    // if not for the input tag this won't work properly
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (

    // wrapper
    <div className="w-full h-[100vh] bg-gray-500 flex justify-center items-center">

      {/* box */}
      <div className="w-5/6 h-[60%] flex flex-col justify-around border-black rounded-xl border-[5px] ">

        {/* password container */}
        <input 
          value={password} 
          ref={passwordRef} 
          aria-readonly 
          className=" overflow-auto w-[80%] h-auto rounded-md mt-[2rem] border-[2px] py-[1rem] px-[1rem] mx-auto"
        />

        {/* utilites container */}
        <div className="flex flex-col items-start justify-around ">

          {/* Length */}
          <div className="w-[80%] mx-auto flex flex-col-reverse items-start">
            <input 
              id="len" 
              type="range" 
              className="w-[100%] mt-[1rem]" 
              onChange={(e) => setLength(e.target.value)} 
              value={length} 
              min={0} 
              max={100} 
            />

            <label
              htmlFor="len"
              className="text-[2rem]">
              Length : {length}
            </label>
          </div>

          {/* Characters */}
          <div className="mt-[2rem] ml-[2rem] ">
            <input 
              id="characters" 
              type="checkbox" 
              checked={isChar} 
              onChange={() => setIsChar(prev => !prev) } 
              className="mx-[3rem] text-[2rem]"
            />

            <label
              htmlFor="characters"
              onClick={() => setIsChar(prev => !prev)}
              className="text-[2rem]" >
              Characters
            </label>
          </div>

          {/* Numbers */}
          <div className="mt-[2rem] ml-[2rem] ">
            <input 
              id="numbers" 
              type="checkbox" 
              checked={isNum} 
              onChange={() => setIsNum(prev => !prev)} 
              className="mx-[3rem] text-[2rem]" 
            />

            <label 
              htmlFor="numbers"
              onClick={() => setIsNum(prev => !prev)}
              className="text-[2rem]">
              Numbers
            </label>
          </div>
        </div>

        {/* button to copy */}
        <button 
          className="w-[80%] h-[2rem] rounded-md bg-blue-300 mx-auto"
          onClick={copyPasswordToClipboard }>
          Copy
        </button>

      </div>
    </div>
  )
}

export default App
