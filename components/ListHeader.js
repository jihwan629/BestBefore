import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const ListHeader = ({
    navigation,
}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.header}>
                목록
            </Text>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    
                }}
                hitSlop={{ top: 32, bottom: 32, left: 32, right: 32}}
            >
                <Text style={styles.delete}>
                    지난 날짜 일괄 삭제
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
    delete: {
        fontSize: 20,
        color: '#da5746',
    }
})

export default withNavigation(ListHeader)