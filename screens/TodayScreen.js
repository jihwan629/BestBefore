import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TodayScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                오늘 화면
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default TodayScreen