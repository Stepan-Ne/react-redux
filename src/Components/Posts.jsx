import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

function Posts({ syncPosts }) {
    return (
        <div>
            {syncPosts.map(p => <Post title={p.title}
             postText={p.postText} key={p.id} id={p.id}/>)}
        </div>
    )
}

const mapState = state => {
   
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapState, null)(Posts);
