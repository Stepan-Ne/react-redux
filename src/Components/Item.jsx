import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router";

function Item({ match, location, history }) {

  const [state, setState] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

async function fetchData() {
const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
const response = await data.json()
setState(response)
}

  console.log('Match: ', match)
  console.log(state)

  return (
    <div className="container">
      <h4>{state.title}</h4>
      <p>{state.body}</p>
      <button type="button" className="btn btn-primary">Change</button>
    </div>
  )
}

const WithRouterItem = withRouter(Item)

export default WithRouterItem;
