import { NavLink, useLocation} from "react-router-dom";

export default function Header() {


    // if(true) {
    //  return <Navigate to='/about/Theyashsawarkar' />
    // }

    let location = useLocation() ;

    console.log( 'location' , location) ;

  return <div>

    <NavLink to='/about' className={({ isActive }) => isActive? 'bg-blue-600' : 'bg-orange-600' }>
    About</NavLink>

    <NavLink to='/' className={({ isActive }) => isActive? 'bg-blue-600' : 'bg-orange-600' }>
    Home</NavLink>

    <NavLink to='/protected' className={({ isActive }) => isActive? 'bg-blue-600' : 'bg-orange-600' }>
    protected</NavLink>
  </div>
}
