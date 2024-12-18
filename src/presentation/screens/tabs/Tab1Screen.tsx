import { Pressable, Text, View } from "react-native"
import { globalColors } from "../../theme/theme"
import { useEffect } from "react"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"
import Icon from '@react-native-vector-icons/ionicons';
import { IonIcon } from "../../components/shared/IonIcon"

export const Tab1Screen = () => {

  


  return (
    <View style={{backgroundColor: globalColors.background, flex: 1}}>
      <HamburgerMenu/>
      <>
        <Text style={{textAlign: 'center'}}>Tab1Screen</Text>
        <Icon style={{textAlign: "center", marginTop: 30}} name="rocket-outline" size={30} color="#000" />
        <IonIcon styleProp={{textAlign: 'center', color: 'blue', marginTop: 300}} name="rocket" size={100} />
      </>

    </View>
  )
}