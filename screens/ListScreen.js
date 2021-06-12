import React from 'react'
import { 
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import ArticleItem from '../components/ArticleItem'
import ListHeader from '../components/ListHeader'

const ListScreen = ({
    articles,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ListHeader/>
            <FlatList 
                data={articles}
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