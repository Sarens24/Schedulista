import { View, Text, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Schedule from './Schedule';
import Settings from './Settings';
import ScheduleConfiguration from './ScheduleConfiguration';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const Footer = () => {
    return (
        <Tab.Navigator labeled={false} tabBar={props => <MyTabBar {...props} />}
            barStyle={{ backgroundColor: '#ba9b7b', height: 70 }}
        >
              <Tab.Screen
                name="ScheduleConfiguration"
                options={{
                    tabBarLabel: 'ScheduleConfiguration',
                    tabBarIcon: () => (
                      // or calendar-edit
                        <MaterialCommunityIcons name="calendar-edit" color='white' size={26} />
                    )
                }}
                component={ScheduleConfiguration} />
            <Tab.Screen
                name="Schedule"
                options={{
                    tabBarLabel: 'Schedule',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="calendar" color='white' size={26} />
                    )
                }}
                component={Schedule} />
            <Tab.Screen
                name="Settings"
                labeled={false}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="cog" color='white' size={26} />
                    )
                }}
                component={Settings} />
        </Tab.Navigator>
    );
  };
  
  export default Footer;