import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import './gesture-handler';
import { StackNavigator } from "./presentation/routes/StackNavigator";



export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}