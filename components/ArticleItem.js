import React from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const ArticleItem = ({
    article: {
        id,
        image,
        name,
        date,
    },
    navigation,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
                navigation.navigate('View')
            }
        >
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={image}
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.date}>
                        {date.getFullYear() + '년 ' 
                        + (date.getMonth() + 1) + '월 '
                        + date.getDate() + '일'}
                    </Text>
                    <Text 
                        style={styles.name}
                        numberOfLines={2}
                    >
                        {name}
                    </Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
    },
    info: {
        flex: 1,
        paddingBottom: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },
    date: {
        marginBottom: 8,
        fontSize: 18,
        color: '#9e9e9e'
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.select({
            ios: 1,
            android: 4
        }),
    },
})

export default withNavigation(ArticleItem)