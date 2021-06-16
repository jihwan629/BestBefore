import React from 'react'
import { 
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import EditHeader from '../components/EditHeader'


const EditScreen = ({
    create,
}) => {
    let name = ''

    return (
        <SafeAreaView style={styles.container}>
            <EditHeader done={() => {
                create(name)
            }} />

            <View style={styles.info}>
                <Image 
                    style={styles.image}
                    source={require('../assets/favicon.png')}
                />
                    
                <TextInput 
                    placeholder="상품명" 
                    multiline={true}
                    onChangeText={(text) => { 
                        name = text 
                    }}
                    style={styles.name}
                >
                    {name}
                </TextInput>

                <View style={styles.divider} />

                <Text style={styles.date}>
                    날짜
                </Text>

            </View>
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
        width: '80%',
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 20,
        color: '#bdbdbd',
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '90%',
        backgroundColor: '#e1e1e1',
    }
})

export default withContext(EditScreen)