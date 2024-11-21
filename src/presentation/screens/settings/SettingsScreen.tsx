import { Text, View } from "react-native"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { StackActions, useNavigation } from "@react-navigation/native"
import { globalStyles } from "../../theme/theme";


export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container} >
        <Text style = {{marginBottom: 10}}>SettingsScreen</Text>
        <PrimaryButton
          onPress={()=>{navigation.goBack()}}
          label="Back"
        />
        <PrimaryButton
          onPress={()=>{navigation.dispatch(StackActions.popToTop)}}
          label="Back to Home"
        />

    </View>
  )
}	