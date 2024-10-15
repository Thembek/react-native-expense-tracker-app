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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverView(){
    return(
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({tintColor}) => { <IconButton icon="add" size={24} color={tintColor} onPress={() => {}}/>}
        }}>
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
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name='ExpensesOverview' component={ExpensesOverView} options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen name='ManageExpense' component={ManageExpense}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Index;