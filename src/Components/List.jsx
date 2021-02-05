import React, { useState, useEffect } from 'react';
import Post from './Post';
import FormSubmit from './FormSubmit';
import { fetchPostsThunk } from '../redux/postReducer';
import { connect, useSelector } from 'react-redux';
import Loader from './Loader';

function List({ posts, fetchPostsThunk }) {
  // const fetchPosts = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //   const response = await data.json()
  //   setState(response)
  // }

  //const [state, setState] = useStastate.app.loaderte([])
  const loader = useSelector((state) => state.app.loader);
  useEffect(() => {
    fetchPostsThunk();
  }, []);

  //console.log('List ', posts)
  return (
    <>
      <FormSubmit />
      {loader ? (
        <Loader />
      ) : (
        posts.map((post) => <Post key={post.id.toString()} {...post} />)
      )}
    </>
  );
}

const mapState = (state) => {
  console.log(state);
  return { posts: state.fetchPosts.posts };
};

export default connect(mapState, { fetchPostsThunk })(List);
