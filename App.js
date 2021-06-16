import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'

let defaultimage = require('./assets/favicon.png');

export default class App extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        name: '제육 김밥',
        date: new Date(2021, 5, 30),
        image: defaultimage,
      },
      {
        id: 2,
        name: '제육 삼각김밥',
        date: new Date(),
        image: defaultimage,
      },
      {
        id: 3,
        name: '콩나물',
        date: new Date(2021, 5, 10),
        image: defaultimage,
      },
      {
        id: 4,
        name: '부침 두부',
        date: new Date(2021, 5, 14),
        image: defaultimage,
      },
      {
        id: 5,
        name: '고기 듬뿍 도시락',
        date: new Date(2021, 5, 10),
        image: defaultimage,
      },
    ],
    id: 6,
  }

  render() {
    return (
      <ContextProvider
        articles={this.state.articles}
        create={(name, image, date) => {
          if(image === undefined || image === '') 
            image = defaultimage
          else
            image = {uri: `${image}`}

          if(date === undefined || date === '') 
            date = new Date()
          else
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate())

          this.setState({
            articles: [{
              id: this.state.id,
              image: image,
              name: name,
              date: date
            }].concat(this.state.articles),
            id: this.state.id + 1,
          })
        }}
      >
        <Navigator />
      </ContextProvider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
