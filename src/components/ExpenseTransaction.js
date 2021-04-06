import React,{ useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

const ExpenseTransactions = ({expenseTransaction}) => {
    const { expensedeleteTransaction } = useContext(GlobalContext);

    return (
        <li className="transaction">
            <span className="transaction-text">{ expenseTransaction.expenseText }</span>
            <span className="transaction-amount">${ expenseTransaction.expenseAmount }</span>
            <button className='delete-btn' onClick={()=>expensedeleteTransaction(expenseTransaction.id) }>
                <i className='fas fa-trash'></i>
            </button>
        </li>
    );
};

export default ExpenseTransactions;
