import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import './gesture-handler';
import { StackNavigator } from "./presentation/routes/StackNavigator";
import { SideMenuNavigator } from "./presentation/routes/SideMenuNavigator";
import { BottomTabNavigator } from "./presentation/routes/BottomTabNavigator";



export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator/>
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  )
}