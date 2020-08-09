const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'test':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state;
    }
}

export default rootReducer;