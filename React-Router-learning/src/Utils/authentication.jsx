import { useNavigate} from "react-router-dom";
import ProtectedComponent from "../Components/ProtectedComponent";
import {useEffect} from 'React' ;

let authenticated = true ; // Assuming you have logic to set this to true later

export default function Authentication() {

  let navigate = useNavigate();

useEffect(
() => {
      if(!authenticated) {
        navigate('/') ;
      }
  
}
)

return <ProtectedComponent/>
}
