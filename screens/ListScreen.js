import React from 'react'
import { 
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

let defaultimage = require('../assets/favicon.png');

const ListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="목록" />
            <ArticleItem
                article={{
                    id: 1,
                    name: '딸기 샌드위치, 백종원 도시락, 전주 비빔밥 삼각김밥, 바나나, 사과, 오렌지, 트윈 쿠키, 돈가스 삼각김밥, 제육 김밥, 참치마요 삼각김밥, 피쉬 버거',
                    date: '2021년 6월 10일',
                    image: defaultimage,
                }}
            />
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

export default ListScreen