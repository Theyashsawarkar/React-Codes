
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_NfOE23851TFlr7NLWwSs0xbQDZhWm4rc0o8IaHYi&currencies=&base_currency=${currency}`)
      .then((res) => res.json())
      .then((val) => val.message ?? val.data)
      .then((val) => {
          if(typeof val === 'string') {
          setData(val)
          throw new Error("can't fetch data from the api")
        }else{
          setData(val);
        }
      }) 
      .catch((error) => {
        console.log(error.message) ;
      })
      }, [currency])
  return data
}

export default useCurrencyInfo;
