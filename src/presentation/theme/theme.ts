import { StyleSheet } from "react-native";


export const globalColors = {
    primmary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3A0CA3',
    success: '#4cc9F0',
    marning: '#fCA311',
    dark: '#22223B',

    background: '#fff'
}



export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },

    primaryButton: {
        backgroundColor: globalColors.primmary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },

    buttonText: {
        color: globalColors.background,
        fontSize: 18,
    }

    
})