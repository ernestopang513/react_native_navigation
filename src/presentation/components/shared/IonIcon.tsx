import { IconProps } from '@react-native-vector-icons/common';
import Icon from '@react-native-vector-icons/ionicons';

interface Props {
    name: string;
    size?: number;
    color?: string;
    styleProp?: {};
}



export const IonIcon = ({name, size = 20, color='black', styleProp = {} }: Props) => {

  return (

    <Icon style={{...styleProp}}  name={name as any} size={size} color={color} />

  )
}