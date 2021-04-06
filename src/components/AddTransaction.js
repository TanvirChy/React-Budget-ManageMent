import React,{useContext, useState} from 'react'
import { v1 as uuidv1 } from 'uuid';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {

    const { addIncome ,addExpense} = useContext(GlobalContext); 

    const [income, setIncome] = useState({
        incomeText:'',
        incomeAmount:0,
    }); 

    const { incomeText,incomeAmount} = income

    const onChangeIncome = e =>{
        setIncome({...income,[e.target.name]:e.target.value}); 
    };
    const onSubmitIncome = e =>{
        e.preventDefault();

        const newIncomeTransaction = {
            id:uuidv1(),
            incomeText,
            incomeAmount:incomeAmount *1,
        };
        addIncome(newIncomeTransaction);
        setIncome({
            incomeText:'',
            incomeAmount:0
        })
    };

    const [expense, setExpense] = useState({
        expenseText:'',
        expenseAmount:0,
    }); 

    const { expenseText,expenseAmount} = expense

    const onChangeExpense = e =>{
        setExpense({...expense,[e.target.name]:e.target.value}); 
    };
    const onSubmitExpense = e =>{
        e.preventDefault();

        const newExpenseTransaction = {
            id:uuidv1(),
            expenseText,
            expenseAmount:expenseAmount *1,
        };
        addExpense(newExpenseTransaction);
        setExpense({
            expenseText:'',
            expenseAmount:0
        })
    };


    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitIncome}>
                <div className='input-group income'>
                    <input type='text' 
                        name='incomeText'
                        value={incomeText}
                        placeholder='Add income...' 
                        onChange={onChangeIncome}/>
                    <input type='number' 
                        name='incomeAmount'
                        value={incomeAmount}
                        placeholder='Amount' 
                        onChange={onChangeIncome}/>
                    <input type='submit' value='Submit' />

                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className='input-group expense'>
                    <input 
                        type='text' 
                        name='expenseText'
                        value={expenseText}
                        placeholder='Add expense...'
                        onChange={onChangeExpense}
                        />
                    <input 
                        type='number' 
                        name='expenseAmount'
                        value={expenseAmount}
                        placeholder='Amount'
                        onChange={onChangeExpense}

                        />
                    <input type='submit' value='Submit' />

                </div>
            </form>
        </div>
    )
}

export default AddTransaction
