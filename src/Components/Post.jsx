import { findByTitle } from '@testing-library/react'
import React from 'react'

function Post({ title, postText, id }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{postText}</p>
            
        </div>
    )
}

export default Post;
