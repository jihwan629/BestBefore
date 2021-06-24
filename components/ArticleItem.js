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
import { withContext } from 'react-simplified-context'
import { Ionicons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'

const defaultImg = require('../assets/favicon.png')

const ArticleItem = ({
    article: {
        id,
        image,
        name,
        date,
    },
    navigation,
    removeById,
}) => {
    const dateSplit = date.split(' ')

    return (
        <Swipeable
            renderRightActions = {() => 
                <DeleteButton onPress={() => removeById(id)} />
            }
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                    navigation.navigate('View', { id : id })
                }
            >
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.image}
                            source={(image === undefined || image === '') ? 
                                    defaultImg : {uri: `${image}`}}
                        />
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.date}>
                            { dateSplit[0] + '년 ' 
                            + dateSplit[1] + '월 '
                            + dateSplit[2] + '일'}
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
        </Swipeable>
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
        borderRadius: 150 / 8,
        overflow: "hidden",
    },
})

export default withNavigation(withContext(ArticleItem))