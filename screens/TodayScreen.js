import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

let defaultimage = require('../assets/favicon.png');

const TodayScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="오늘" />
            <ArticleItem
                article={{
                    id: 2,
                    name: '제육 삼각김밥',
                    date: '2021년 6월 11일',
                    image: defaultimage,
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default TodayScreen