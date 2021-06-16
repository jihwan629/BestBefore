import React from 'react'
import { 
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigation } from 'react-navigation'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
    navigation,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader />
            <ScrollView contentContainerStyle={styles.info}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.info}
                    onLongPress={() => {
                        navigation.navigate('Edit')
                    }}
                >
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
                </TouchableOpacity>
                
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        marginBottom: 20,
        width: 400,
        height: 400,
        resizeMode: 'cover',
        transform: [{ scale: 0.55 }],
    },
    name: {
        padding: 20,
        fontSize: 25,
        lineHeight: 20,
        color: '#424242',
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 20,
        color: '#bdbdbd',
    }
})

export default withNavigation(ViewScreen)