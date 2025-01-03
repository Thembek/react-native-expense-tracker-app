import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import ManageExpense from '../../screens/ManageExpense';
import RecentExpenses from '../../screens/RecentExpense';
import AllExpenses from '../../screens/AllExpenses';

import { GlobalStyles } from '../../constants/styles';
import IconButton from '../../components/UI/IconButton';
import ExpensesContextProvider from '../../store/expenses-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverView(){
    return(
        <Tab.Navigator screenOptions={({navigation}) => ({
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({tintColor}) => { <IconButton icon="add" size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpense')}}/>}
        })}>
            <Tab.Screen name='RecentExpense' component={RecentExpenses} options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => ( <Ionicons name='hourglass' color={color} size={size}/> )
            }}/>
            <Tab.Screen name='AllExpenses' component={AllExpenses} options={{
                title: 'All Expenses',
                tabBarLabel: 'All Expenses',
                tabBarIcon: ({color, size}) => (<Ionicons name='calendar' color={color} size={size}/>)
            }}/>
        </Tab.Navigator>
    )
}

function Index(){
    return(
        <>
            <ExpensesContextProvider>
                <NavigationContainer independent={true}>
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                        headerTintColor: 'white',
                    }}>
                        <Stack.Screen name='ExpensesOverview' component={ExpensesOverView} options={{
                            headerShown: false,
                        }}/>
                        <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
                            presentation: 'modal',
                        }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
            
        </>
    )
}

export default Index;