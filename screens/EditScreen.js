import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import EditHeader from '../components/EditHeader'


const EditScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <EditHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default EditScreen