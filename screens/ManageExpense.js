import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function ManageExpense({ route, navigation }){
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return(
        <Text>ManageExpense Screen</Text>
    )
}

export default ManageExpense;