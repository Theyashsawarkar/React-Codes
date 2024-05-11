
import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {

  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")

  // amount in above (from) box
  const [amount, setAmount] = useState(0)

  // amount in below (to) box
  const [convertedAmount, setConvertedAmount] = useState(0)

  // if api returns array then the fetch operaton was succesfull else it returns an string message 
  const currencyInfo = useCurrencyInfo(from)

  if(typeof currencyInfo === 'string') {
    return <div className='h-[100vh] w-[100vw] flex flex-wrap justify-center items-center'>
      <div className='h-auto w-[80%] bg-black flex flex-col justify-center items-center text-red-600 text-[5rem] rounded-md py-[3rem]'>
        Server Error : 429 Too Many requests
        <div className='text-white text-[1rem]'>used all available requests for free version, upgrade to pro for more </div>
      </div>
    </div>
  }

  // this is an array that will show the select options
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to].value)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App

