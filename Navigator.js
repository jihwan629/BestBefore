import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import ListScreen from './screens/ListScreen'
import TodayScreen from './screens/TodayScreen'

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
    Today: {
        screen: TodayScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons 
                        name="today-outline"
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

export default createAppContainer(TabNavigator)