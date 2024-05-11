

// we can't use useParams hook in here so we use the match object to acces the id 

async function infoLoader(match) {

  let id = match.params.id ;
  console.log(match) ;
  let res = await fetch(`https://api.github.com/users/${id}`) ;
  return await res.json() ;
}

export default infoLoader ;
