import React from 'react'
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import Header from '../components/Header'
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

            <View style={styles.body}>
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
                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '100%',
        backgroundColor: '#f1f1f1',
    }
})

export default withContext(EditScreen)