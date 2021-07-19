import React, {useReducer, createContext} from 'react';
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Actions creators
    const deleteTransactions = (id) =>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id});

    }

    const addTransactions = (transaction) =>{
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    }

    console.log(transactions);
    return(
        <ExpenseTrackerContext.Provider value={{deleteTransactions,addTransactions,transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}