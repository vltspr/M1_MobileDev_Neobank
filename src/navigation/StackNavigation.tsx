import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import LoginScreen from '../screens/LoginScreen';
import TabNavigation from './TabsNav';
import HomeScreen from '../screens/HomeScreen';
import DeviseScreen from '../screens/DeviseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const StackNavigation = createStackNavigator({
    Login : LoginScreen,
    Home: HomeScreen,
    Devise : DeviseScreen,
    Profil : ProfileScreen,
    Details: {
        screen: TabNavigation,
        navigationOptions: { header: undefined}
    }
}, 
{
    initialRouteName: 'Login'
})

export default createAppContainer(StackNavigation)