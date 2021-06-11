import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const EditScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                추가 화면
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default EditScreen