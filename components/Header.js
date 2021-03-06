import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'

const Header = ({
    navigation,
    title,
    button,
    onPress,
    onLongPress
}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                activeOpacity={0.8}
                onLongPress={onLongPress}
            >
                <Text style={styles.header}>
                    {title}
                </Text>
            </TouchableOpacity>
            

            <TouchableOpacity
                activeOpacity={button === '' ? 1 : 0.8}
                disabled={button === ''}
                onPress={onPress}
                hitSlop={{ top: 32, left: 32, right: 32}}
            >
                <Text style={styles.button}>
                    {button}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 48,
        height: 52,
        borderBottomWidth: 0.3,
        borderBottomColor: '#bdbdbd',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
    },
    header: {
        paddingLeft: 16,
        paddingRight: 16,
        color: '#212121',
        fontSize: 32,
        fontWeight: '600',
    },
    button: {
        fontSize: 20,
        color: '#da5746',
    }
})

export default withNavigation(Header)