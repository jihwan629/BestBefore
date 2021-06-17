import React, { useState, useEffect } from 'react'
import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigation } from 'react-navigation'
import { withContext } from 'react-simplified-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as ImagePicker from 'expo-image-picker'
import EditHeader from '../components/EditHeader'

const defaultImg = require('../assets/favicon.png')

const EditScreen = ({
    create,
    update,
    articles,
    navigation,
}) => {
    const id = navigation.getParam('id', -1)
    const article = articles.find((a) => {
        return a.id === id
    })

    const [name, setName] = useState(article ? article.name : '')
    const [image, setImage] = useState(article ? article.image : '')
    const [date, setDate] = useState(article ? article.date : new Date())
    const [show, setShow] = useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
    }

    // 갤러리, 카메라 허락
    // useEffect(() => {
    //     (async () => {
    //         if(Platform.OS !== 'web') {
    //             const { allowLib } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //             if(allowLib !== 'granted') {
    //                 alert('미동의시 이미지 등록이 불가능합니다.')
    //             }

    //             const { allowCam } = await ImagePicker.requestCameraPermissionsAsync()
    //             if(allowCam !== 'granted') {
    //                 alert('미동의시 이미지 촬영이 불가능합니다.')
    //             }
    //         }
    //     })()
    // }, []) 

    // 갤러리에서 이미지 가져오기
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if(!result.cancelled) {
            setImage(result.uri)
        } 
    }

    // 카메라로 이미지 촬영하기
    const takePicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if(!result.cancelled) {
            setImage(result.uri)
        } 
    }

    return (
        <SafeAreaView style={styles.container}>
            <EditHeader done={() => {
                if(id > -1) {
                    update(id
                        , name
                        , image === defaultImg ? '' : image
                        , date)
                } else {
                    create(name
                        , image === defaultImg ? '' : image
                        , date)
                }
            }} />

            <KeyboardAwareScrollView>
                <View style={styles.info}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={pickImage}
                    >
                        <Image 
                            style={styles.image}
                            source={(image === undefined || image === '') ? 
                                defaultImg : {uri: `${image}`}}
                        />
                    </TouchableOpacity>
                        
                    <TextInput 
                        placeholder="상품명" 
                        multiline={true}
                        textAlign='center'
                        onChangeText={(text) => { 
                            setName(text) 
                        }}
                        style={styles.name}
                    >
                        {name}
                    </TextInput>

                    <View style={styles.divider} />
                    
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            setShow(true)
                        }}
                        hitSlop={{ top: 16, bottom: 32, left: 32, right: 32}}
                    >
                        <Text 
                            style={styles.date}
                            
                        >
                            {date.getFullYear() + '년 ' 
                            + (date.getMonth() + 1) + '월 '
                            + date.getDate() + '일'}
                        </Text>
                    </TouchableOpacity>
                    

                    <View style={styles.divider} />

                    {show &&
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    }

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        marginBottom: 20,
        width: 400,
        height: 400,
        resizeMode: 'cover',
        transform: [{ scale: 0.55 }],
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#e1e1e1"
    },
    name: {
        width: '80%',
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    date: {
        paddingTop: 20,
        fontSize: 20,
        color: '#bdbdbd',
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '90%',
        backgroundColor: '#e1e1e1',
    }
})

export default withNavigation(withContext(EditScreen))