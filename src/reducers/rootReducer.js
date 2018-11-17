const initState = {
    posts: [
        { id: '1', title: "look at that", body: "blah blah blah" },
        { id: '2', title: "look at this", body: "blar blar blar" },
        { id: '3', title: "look at them", body: "blag blag blag" }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer