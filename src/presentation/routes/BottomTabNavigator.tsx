import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens/tabs';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { IonIcon } from '../components/shared/IonIcon';


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: globalColors.primmary,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          // backgroundColor: 'white',
          // marginBottom: 100,
          height: 70,
          borderTopWidth: 0,
          elevation: 0
          
        },
        tabBarLabelStyle: {
          marginTop: 10
          // marginBlockEnd: 30,
          // marginVertical: 10,
          // fontSize: 10
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'tranparent',
          shadowColor: 'transparent'
        }
      }}
    
    >
      <Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: ({color}) => (<IonIcon name='logo-octocat' styleProp={{color}} size={25}/>)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2', tabBarIcon: ({color}) => (<IonIcon name='logo-windows' styleProp={{color}} size={25}/>)}} component={TopTabNavigator} />
      <Tab.Screen name="Tab3" options={{title: 'Tab3', tabBarIcon: ({color}) => (<IonIcon styleProp={{color}}  name='logo-react' size={25}/>)}} component={StackNavigator} />
    </Tab.Navigator>
  );
}


  