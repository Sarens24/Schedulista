import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schedule from './Schedule';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const Footer = () => {
    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name="Schedule" component={Schedule} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </View>
    );
  };
  
  export default Footer;