import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setPostAC, sendPostAC, setPostsAC } from '../redux/actions';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

function MyPost({
  setText,
  sendPost,
  setPosts,
  myPosts,
  textOfPost,
  allPosts,
  ...restProps
}) {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_page=2&_limit=3')
      .then((data) => {
        setPosts(data);
      });
  }, []);
  

  const updateText = (e) => {
    let value = e.target.value;
    setText(value);
  };

  // const deletePost = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //   .then(data => {
  //     debugger
  //     setPosts(data);
  //   })
  // }


  return (
    <div>
      <div>
        <textarea onChange={(e) => updateText(e)} value={textOfPost}></textarea>
        <br />
        <button onClick={sendPost}>Send</button>
      </div>

      <div>
        {myPosts.map((p) => (
          <NavLink to={"/posts/" + p.id} key={p.id.toString()}>
          <Post key={p.id} post={p} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

const mapState = (state) => {
  return {
    myPosts: state.posts.posts, //Arr<{body: , title: , id: num}>
    textOfPost: state.posts.textOfPost,
    allPosts: state.posts.allPosts
  };
};
const mapDispatch = {
    setText: setPostAC,
    sendPost: sendPostAC,
    setPosts: setPostsAC
};

const MyPostWithRouter = withRouter(MyPost)
const MyPostContainer = connect(mapState, mapDispatch)(MyPostWithRouter);



export default MyPostContainer;
