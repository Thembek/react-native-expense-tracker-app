import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Input from './Input';
import Button from '../UI/Button';
import { getFormattedDate } from '@/util/date';


function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }){
    const [inputValue, setInputValue] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : '',
    });

    function inputChangeHandler(inputIndentifier, enteredValue){
        setInputValue((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIndentifier]: enteredValue
            }
        });
    }

    function submitHandler(){
        const expenseData = {
            amount: +inputValue.amount,
            date: new Date(inputValue.date),
            description: inputValue.description,
        };

        onSubmit(expenseData);
    }

    return(
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input style={styles.rowInput} label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValue.amount,
                }}/>
                <Input style={styles.rowInput} label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValue.date,
                }}/>
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true, 
                //autoCapitalize: 'none'
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValue.description,
            }} />

            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})