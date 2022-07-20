const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload.users,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload.user,
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
            }
        case 'CLEAR_USER':
            return {
                ...state,
                user: {},
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload.repos,
            }
        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: false,
            }
        case 'SET_LOADING_TRUE':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state;
    }
}

export default githubReducer;