import React from "react"
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import LoginScreen from '../screens/LoginScreen';
import TabNavigation from './TabsNav';
import HomeScreen from '../screens/HomeScreen';
import DeviseScreen from '../screens/DeviseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Header from "../components/Header"

const StackNavigation = createStackNavigator({
    Login : LoginScreen,
    Home: HomeScreen,
    Devise: {
        screen: DeviseScreen,
        navigationOptions: ({ navigation }) => ({ headerTitle: <Header title="Account" navigation={navigation} /> })
    },
    Profil: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({ headerTitle: <Header title="Profil" navigation={navigation} /> })
    },
    Details: {
        screen: TabNavigation,
        navigationOptions: ({ navigation }) => ({ headerTitle: <Header title="Account" navigation={navigation} /> })
    }
}, 
{
    initialRouteName: 'Login'
})

export default createAppContainer(StackNavigation)