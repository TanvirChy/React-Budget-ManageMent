import React,{createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    incomeTransactions:[],
    expenseTransactions:[]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const addIncome = incomeTransaction =>{
        dispatch({
            type:'ADD_INCOME',
            payload: incomeTransaction,
        });
    }
    const addExpense = expenseTransaction =>{
        dispatch({
            type:'ADD_EXPENSE',
            payload: expenseTransaction,
        });
    }

    const incomedeleteTransaction = id =>{
        dispatch({
            type:'INCOME_DELETE_TRANSACTION',
            payload:id,
        });
    };
    const expensedeleteTransaction = id =>{
        dispatch({
            type:'EXPENSE_DELETE_TRANSACTION',
            payload:id,
        });
    };



    return (
        <GlobalContext.Provider value={{
        incomeTransactions:state.incomeTransactions,
        expenseTransactions:state.expenseTransactions,
        addIncome,
        addExpense,
        incomedeleteTransaction,
        expensedeleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
