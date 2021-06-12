import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ViewScreen