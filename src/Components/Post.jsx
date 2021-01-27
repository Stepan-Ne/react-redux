import { findByTitle } from '@testing-library/react'
import React from 'react'

function Post({ title }) {
    return (
        <div>
            {title}
        </div>
    )
}

export default Post
