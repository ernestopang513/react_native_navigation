import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimensions = useWindowDimensions();
    
  return (
    <Drawer.Navigator 

        drawerContent = {(props) => <CustomDrawerContent{...props}/>}
        screenOptions={{

            headerShown: false,
            drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',

            drawerActiveBackgroundColor: globalColors.primmary,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: globalColors.primmary,
            drawerItemStyle: {
                borderRadius: 100,
                paddingHorizontal: 20
            }
        }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcon size={30} name='logo-python' color={color} />)}} name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcon size={30} name='logo-tux' color={color} />)}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primmary,
                    margin: 30, 
                    borderRadius: 50
                }}
            />

            <DrawerItemList {...props} />
        
        </DrawerContentScrollView>


    )
}