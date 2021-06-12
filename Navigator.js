import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'

import ListScreen from './screens/ListScreen'
import TodayScreen from './screens/TodayScreen'
import EditScreen from './screens/EditScreen'
import ViewScreen from './screens/ViewScreen'

const TabNavigator = createBottomTabNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons 
                        name="md-list"
                        size={25}
                        color={tintColor}
                    />
            },
            tabBarLabel: '목록',
        }
    },
    AddButton: {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons 
                        name="ios-add-circle"
                        size={36}
                        color="#da5746"
                    />
            },
            tabBarOnPress: ({ navigation }) => {
                navigation.navigate('Edit')
            },
            tabBarLabel: '추가',
        }
    },
    Today: {
        screen: TodayScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons 
                        name="today"
                        size={25}
                        color={tintColor}
                    />
            },
            tabBarLabel: '오늘',
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#424242',
        inactiveTintColor: '#9e9e9e',
        showLabel: false,
        style: {
            borderTopColor: '#bdbdbd',
            backgroundColor: '#ffffff'
        }
    }
})

const AppNavigator = createStackNavigator({
    Edit: EditScreen,
    View: ViewScreen,
    Tab: TabNavigator,
}, {
    initialRouteName: 'Tab',
    mode: 'modal',
    headerMode: 'none',
})

export default createAppContainer(AppNavigator)