import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setPostAC, sendPostAC } from '../redux/actions';

function MyPost({setText, sendPost, myPosts, ...restProps}) {
  
  return (
    <div>
      <div>
      <textarea onChange={(e) => setText(e)}></textarea>
      <br/>
      <button onClick={sendPost}>Send</button>
      </div>
     
     <div>
       {myPosts.posts.map(p => <Post key={p.id} message={p.message} />)}
     </div>
    </div>
  )
}

const mapState = (state) => {
return {
  myPosts: state.posts //Arr<{message: '', id: num}>
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
