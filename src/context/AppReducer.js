export default(state,action)=>{
    switch(action.type){
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTransactions:[action.payload,...state.incomeTransactions]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseTransactions:[action.payload,...state.expenseTransactions]
            }
        case 'INCOME_DELETE_TRANSACTION':
            return{
                ...state,
                incomeTransactions:state.incomeTransactions.filter(
                    (incomeTransaction)=> incomeTransaction.id !==action.payload
                )
            }
        case 'EXPENSE_DELETE_TRANSACTION':
            return{
                ...state,
                expenseTransactions:state.expenseTransactions.filter(
                    (expenseTransaction)=> expenseTransaction.id !==action.payload
                )
            }
        default:
            return state;


    }
};