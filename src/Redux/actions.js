export const CREATE_POST = 'CREATE_POST'
export const FETCHED_POSTS = 'FETCHED_POSTS'

export const createPost = (post) => ({
    type: CREATE_POST, payload: {...post}
})

export const fetchPosts = () => {
    
}
