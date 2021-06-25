import React, { useState } from 'react'
import { 
    StyleSheet,
    FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import ArticleItem from '../components/ArticleItem'
import Header from '../components/Header'
import ModalButton from '../components/ModalButton'

const TodayScreen = ({
    articles,
    removeToday,
}) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header 
                title="오늘" 
                button="오늘 폐기 삭제"
                onPress={() => toggleModal()}
                // onPress={() => removeToday()}
            />

            <ModalButton
                title="정말로 삭제하시겠습니까?"
                isvisible={isModalVisible}
                confirm={() => {
                    removeToday()
                    toggleModal()
                }}
                cancel={() => {
                    toggleModal()
                }}
            />

            <FlatList 
                data={articles.filter((article) => {
                    var today = new Date()
                    const splitDate = article.date.split(' ')

                    return splitDate[0] == today.getFullYear()
                            &&  splitDate[1] == today.getMonth() + 1
                            &&  splitDate[2] == today.getDate()
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
    },
})

export default withContext(TodayScreen)