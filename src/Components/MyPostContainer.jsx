import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setPostAC, sendPostAC } from '../redux/actions';

function MyPost({setText, sendPost, myPosts, textOfPost, ...restProps}) {
  
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
       {myPosts.map(p => <Post key={p.id} message={p.message} />)}
     </div>
    </div>
  )
}

const mapState = (state) => {
  
return {
  myPosts: state.posts.posts, //Arr<{message: '', id: num}>
  textOfPost: state.posts.textOfPost
}
}
const mapDispatch = (dispatch) => {
  return {
    setText: (text) => { dispatch(setPostAC(text)) },
    sendPost: () => { dispatch(sendPostAC()) }
  }
}

const MyPostContainer = connect(mapState, mapDispatch)(MyPost);

export default  MyPostContainer;
