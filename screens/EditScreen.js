import React, {useState} from 'react'
import { 
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withContext } from 'react-simplified-context'
import DateTimePicker from '@react-native-community/datetimepicker'
import EditHeader from '../components/EditHeader'

const EditScreen = ({
    create,
}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState(require('../assets/favicon.png'))
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
    }

    return (
        <SafeAreaView style={styles.container}>
            <EditHeader done={() => {
                create(name
                    , image === require('../assets/favicon.png') ?
                        '' : image
                    , date)
            }} />

            <View style={styles.info}>
                <Image 
                    style={styles.image}
                    source={image}
                />
                    
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

                <Text 
                    style={styles.date}
                    onPress={() => {
                        setShow(true)
                    }}
                >
                    {date.getFullYear() + '년 ' 
                    + (date.getMonth() + 1) + '월 '
                    + date.getDate() + '일'}
                </Text>

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

export default withContext(EditScreen)