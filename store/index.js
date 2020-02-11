// create a store

export const state = () => ({
    posts: {}       // set an empty post object which will be our state.
})

// the vueX store will be mananged via getters, mutations and actions

// getters - to get the posts from the state
export const getters = {
    posts(state) {
        return state.posts;      // this is how we'll get the post from the state
    }
};


// mutations - To add posts to the state
export const mutations = {
    SET_POSTS(state, posts) {   // set two parameters. 1. the state, 2. the posts that you are sending to the state
        state.posts = posts;     // assign the given post to the state's post
    }
};


// actions -
export const actions = {
    // use commit to commit to the post - below we can use context.commit but we can also destructure it {commit}
    setPosts({commit}, posts) {
        commit("SET_POSTS", posts);
    }
};
