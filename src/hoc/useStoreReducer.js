var isEmpty = require('lodash.isempty');

const useStoreReducer = (state, action) => {

    switch(action.type) {
        case 'SET_CURRENT_USER' :
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user: action.payload.user
            }
        case 'ADD_TO_CART' :
            return {
                 ...state,
                Cart: [...state.Cart, action.payload]
                }
        default: 
            return state
    }
}

export default useStoreReducer;