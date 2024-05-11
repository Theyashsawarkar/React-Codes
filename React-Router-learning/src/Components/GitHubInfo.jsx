import { useLoaderData } from "react-router-dom"

export default function GitHubInfo() {

  let data = useLoaderData() ;

  return <div>
          <h1>
              {data.name}
          </h1>
          <img src={ data.avatar_url } / >
        </div>
}
