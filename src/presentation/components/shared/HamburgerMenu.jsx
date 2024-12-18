import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { IonIcon } from "./IonIcon";
import { globalColors } from "../../theme/theme";


export const HamburgerMenu = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions ( {
            headerLeft: () => (
                <Pressable
                    style={{marginLeft: 10, marginRight: 20}}
                    onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer) }>
                <IonIcon name="menu-outline" color={globalColors.primmary} size={40} />
                </Pressable>
            )
        })
    }, [])

    return (<></>)
       
  
}