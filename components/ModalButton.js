import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
} from 'react-native'

const ModalButton = ({
    title,
    isvisible,
    confirm,
    cancel
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isvisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        {title}
                    </Text>

                    <View
                        style={styles.containerButton}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ ...styles.modalButton, backgroundColor: '#da5746' }}
                            onPress={confirm}
                        >
                            <Text style={styles.textStyle}>
                                삭제
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ ...styles.modalButton, backgroundColor: '#9e9e9e' }}
                            onPress={cancel}
                        >
                            <Text style={styles.textStyle}>
                                취소
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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

export default ModalButton