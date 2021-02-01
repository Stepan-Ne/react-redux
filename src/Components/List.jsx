import React, {useState, useEffect} from 'react';
import Post from './Post';
import FormSubmit from './FormSubmit';




function List() {

  const fetchPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const response = await data.json()
    setState(response)
  }

  const [state, setState] = useState([])

  useEffect( () => {
    fetchPosts()
  }, [])

  
  return (
    <>
    <FormSubmit />
   { state.map( post => <Post key={post.id.toString()} {...post}/> ) }
    </>
  )
}

export default List
