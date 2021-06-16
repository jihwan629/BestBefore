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
                    var today = new Date()
                    return article.date.getFullYear() === today.getFullYear()
                            &&  article.date.getMonth() === today.getMonth()
                            &&  article.date.getDate() === today.getDate()
                }).sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
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