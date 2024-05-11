
import { Route , createBrowserRouter , createRoutesFromElements } from "react-router-dom"

import Home from "../Components/Home";
import About from "../Components/About";
import GitHubInfo from "../Components/GitHubInfo";
import App from "../App"
import infoLoader from "./infoLoader";

import Authentication from "./authentication";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = 'about' element = {<About/>}/>
      <Route 
        path='about/:id' 
        element = {<GitHubInfo/>}
        loader = {
          infoLoader
        }
      />
      <Route 
        path="protected"
        element = {<Authentication/>}
      />
    </Route>
  )
)

export default router ;
