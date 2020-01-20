const useStoreReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_NEW_ITEM' :
            return {
                ...state,
                Items: [...state.Items, action.payload]
            }
        case 'OPEN_CART' :
            return {
                ...state,
                 Item: action.payload
            }
            case 'CLOSE_MODAL' :
                return {
                    ...state,
                     Item: action.payload
                }
        case 'ORDER' :
            return {
                ...state,
                Orders: [...state.Cart, action.payload]
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