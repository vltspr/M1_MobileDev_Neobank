import { createBottomTabNavigator } from 'react-navigation-tabs';
import DetailScreen from "../screens/DetailsScreen";
import DeviseScreen from "../screens/DeviseScreen";

const TabNavigation = createBottomTabNavigator({
    Details: {
        screen: DetailScreen,
    },
    Devise: {
        screen: DeviseScreen,
    }
},


{
    initialRouteName: 'Details'
})

export default TabNavigation