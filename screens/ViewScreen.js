import React from 'react'
import { 
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader />
            <ScrollView contentContainerStyle={styles.info}>
                <Image 
                    style={styles.image}
                    source={require('../assets/favicon.png')}
                />
                <Text style={styles.name}>
                    식품 이름
                </Text>

                <Text style={styles.date}>
                    날짜
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 20,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    name: {
        padding: 20,
        fontSize: 25,
        lineHeight: 20,
        color: '#424242'
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 20,
        color: '#bdbdbd'
    }
})

export default ViewScreen