import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '@/store/expenses-context';


function AllExpense(){
    const expensesCtx = useContext(ExpensesContext);
    return(
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText="No registered expenses were uploaded."/>
    )
}

export default AllExpense;