import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setPostAC, sendPostAC, setPostsAC } from '../redux/actions';
import axios from 'axios';

function MyPost({setText, sendPost, setPosts, myPosts, textOfPost, ...restProps}) {
  
  useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(data => setPosts(data))
  }, [])
const updateText = (e) => {
  let value = e.target.value
  setText(value)
}

  return (
    <div>
      <div>
      <textarea onChange={(e) => updateText(e)} value={textOfPost}></textarea>
      <br/>
      <button onClick={sendPost}>Send</button>
      </div>
     
     <div>
       {myPosts.map(p => <Post key={p.id} post={p} />)}
     </div>
    </div>
  )
}

const mapState = (state) => {
  
return {
  myPosts: state.posts.posts, //Arr<{body: , title: , id: num}>
  textOfPost: state.posts.textOfPost
}
}
const mapDispatch = (dispatch) => {
  return {
    setText: (text) => { dispatch(setPostAC(text)) },
    sendPost: () => { dispatch(sendPostAC()) },
    setPosts: (posts) => { dispatch(setPostsAC(posts)) }
  }
}

const MyPostContainer = connect(mapState, mapDispatch)(MyPost);

export default  MyPostContainer;
