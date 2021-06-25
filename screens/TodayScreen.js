import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Modal,
    TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import ArticleItem from '../components/ArticleItem'
import Header from '../components/Header'

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
                // onPress={() => removeToday()}
                onPress={() => toggleModal()}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            정말로 삭제 하시겠습니까?
                        </Text>

                        <View
                            style={styles.containerButton}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ ...styles.modalButton, backgroundColor: '#da5746' }}
                                onPress={() => {
                                    removeToday()
                                    toggleModal()
                                }}
                            >
                                <Text style={styles.textStyle}>
                                    삭제
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ ...styles.modalButton, backgroundColor: '#9e9e9e' }}
                                onPress={() => toggleModal()}
                            >
                                <Text style={styles.textStyle}>
                                    취소
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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

export default withContext(TodayScreen)