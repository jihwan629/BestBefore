import React from 'react'
import { 
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import ArticleItem from '../components/ArticleItem'
import Header from '../components/Header'

const TodayScreen = ({
    articles,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="오늘" button="오늘 폐기 삭제"/>
            <FlatList 
                data={articles.filter((article) => {
                    var date = new Date()
                    var today = date.getFullYear() + '년 ' 
                                + (date.getMonth() + 1) + '월 '
                                + date.getDate() + '일'
                    
                    return article.date === today
                })}
                renderItem={({ item }) => {
                    return <ArticleItem article={item} />
                }}
                keyExtractor={(item) => {
                    return `${item.id}`
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

export default withContext(TodayScreen)