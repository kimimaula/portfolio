import React, {createContext, useReducer} from "react";
import Reducer from './useStoreReducer'

const initialState = {
    Items: [{
             title : "Shoes", 
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
             price: "99.99",
             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPjDPo_CNSGpoL5NfZL8XzLAzJsrf1-nB_7KP4MI9a55cxZzNsQ&s",
             key: "random",
             id: "random",
             amountAvailable: 10,
             amount: 0,
             totalAmount: 0
        
         },
         {
             title : "Sweater", 
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
             price: "150",
             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntrbto9AejA8UIYyuExTkfIctDY8WEXr-MZxEoUbhypCAjhhN&s",
             key: "shit",
             id: "shit",
             amountAvailable: 10,
             amount: 0,
             totalAmount: 0
             
         },
         {
             title : "Toy", 
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
             price: "200",
             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZi9v8kkhaKgxJUe02vHi6jeguCm8h6H7Q0zdG6Nogm0deenxUA&s",
             key: "here",
             id: "here",
             amountAvailable: 10,
             amount: 0,
             totalAmount: 0
         },],

    Item: {
        title : "", 
        description: "",
        price: "",
        imageUrl: "",
        key: "",
        id: "",
        amount: 0,
        totalAmount: 0
    },
    Cart: [],
    Orders: [],
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;