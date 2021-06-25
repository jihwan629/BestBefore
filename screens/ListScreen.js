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

const ListScreen = ({
    articles,
    removeExpired,
    reset,
}) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [isResetVisible, setResetVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }
    const toggleReset = () => {
        setResetVisible(!isResetVisible)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header 
                title="목록" 
                button="지난 폐기 삭제"
                onPress={() => toggleModal()}
                // onPress={() => removeExpired()}
                onLongPress={() => toggleReset()}
            />

            <ModalButton 
                title="데이터를 초기화하시겠습니까?"
                isvisible={isResetVisible}
                confirm={() => {
                    reset()
                    toggleReset()
                }}
                cancel={() => {
                    toggleReset()
                }}
            />

            <ModalButton
                title="정말로 삭제하시겠습니까?"
                isvisible={isModalVisible}
                confirm={() => {
                    removeExpired()
                    toggleModal()
                }}
                cancel={() => {
                    toggleModal()
                }}
            />

            <FlatList 
                data={articles.sort((a, b) => {
                    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
                }).sort((a, b) => {
                    const a_splitDate = a.date.split(' ')
                    const b_splitDate = b.date.split(' ')
                    
                    return new Date (a_splitDate[0], a_splitDate[1], a_splitDate[2]) 
                        > new Date (b_splitDate[0], b_splitDate[1], b_splitDate[2])
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingTop: 35,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerButton: {
        flexDirection: 'row',
        padding: 5,
    },
    modalButton: {
        backgroundColor: '#F194FF',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        margin: 15,
        marginBottom: 0,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
    },
})

export default withContext(ListScreen)