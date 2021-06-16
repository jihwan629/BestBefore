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

const ListScreen = ({
    articles,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="목록" button="폐기 전부 삭제"/>
            <FlatList 
                data={articles.sort((a, b) => {
                    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
                }).sort((a, b) => {
                    return a.date > b.date
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

export default withContext(ListScreen)