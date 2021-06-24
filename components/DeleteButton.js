import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

const DeleteButton = ({
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>
                폐기 완료
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 'auto',
        width: 80,
        backgroundColor: '#fe5746',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
    },
})

export default DeleteButton