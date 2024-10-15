import { StyleSheet, Text, View } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

function AllExpense(){
    return(
        <ExpensesOutput expensesPeriod='Total'/>
    )
}

export default AllExpense;