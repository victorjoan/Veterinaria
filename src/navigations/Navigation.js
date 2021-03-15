import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Registrar from '../screens/Registrar';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator= createStackNavigator({
    Login:{screen:Login},
    Registrar:{screen:Registrar},
},
{
    defaultNavigationOptions: stackNavigatorOptions
}

);
export default createAppContainer(AppNavigator);
