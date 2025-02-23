import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
