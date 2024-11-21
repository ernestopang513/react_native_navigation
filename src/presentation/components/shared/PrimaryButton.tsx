import { useNavigation } from "@react-navigation/native"
import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"

interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryButton = ({onPress, label}: Props) => {
    const navigation = useNavigation()

  return (

    <Pressable 
        onPress={onPress}
        style={({pressed}) => ({
          ...globalStyles.primaryButton,
          opacity: (pressed) ? 0.8 : 1,
          // width: (doubleSize) ? 180 : 80,
        })}>
          <Text style={globalStyles.buttonText} >{label}</Text>
    </Pressable>
  )
}