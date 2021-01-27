import React from 'react';
import Post from './Post';

function Posts({ listPosts }) {
    return (
        <div>
            {listPosts.map(p => {
                return <Post key={p} title={p}/>
            })}
        </div>
    )
}

export default Posts;
