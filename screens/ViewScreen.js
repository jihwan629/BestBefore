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
import { withContext } from 'react-simplified-context'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
    navigation,
    articles,
}) => {
    const id = navigation.getParam('id', -1)
    const article = articles.find((a) => {
        return a.id === id
    })

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
                        source={article.image}
                    />
                    
                    <Text style={styles.name}>
                        {article.name}
                    </Text>

                    <Text style={styles.date}>
                        {article.date.getFullYear() + '년 ' 
                        + (article.date.getMonth() + 1) + '월 '
                        + article.date.getDate() + '일'}
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
        borderRadius: 150 / 2,
        overflow: "hidden",
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

export default withNavigation(withContext(ViewScreen))