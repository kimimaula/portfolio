const MainStoreReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM' :
            return {
                ...state,
                Items: [...state.Items, action.payload]
            }
        case 'ADD_TO_CART' :
            return {
                ...state,
                 Cart: [...state.Cart, action.payload]
            }
        case 'OPEN_CART' :
            return {
                ...state,
                 Item: action.payload
            }
        case 'ORDER' :
            return {
                ...state,
                 Order: action.payload
            }
        default: 
            return state
    }
}

export default MainStoreReducer;