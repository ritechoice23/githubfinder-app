const AlertReducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return state = 'error'
        default:
            return state;
            break;
    }
}

export default AlertReducer;