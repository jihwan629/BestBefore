import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'

let today = new Date()

export default class App extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        name: '제육 김밥',
        date: new Date(2021, 5, 30),
        image: '',
      },
      {
        id: 2,
        name: '참치마요 삼각김밥',
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        image: '',
      },
      {
        id: 3,
        name: '콩나물',
        date: new Date(2021, 5, 10),
        image: '',
      },
      {
        id: 4,
        name: '부침 두부',
        date: new Date(2021, 5, 14),
        image: '',
      },
      {
        id: 5,
        name: '고기 듬뿍 도시락',
        date: new Date(2021, 5, 10),
        image: '',
      },
    ],
    id: 6,
  }

  render() {
    return (
      <ContextProvider
        articles={this.state.articles}

        create={(name, image, date) => {
          if(date === undefined || date === '') {
            today = new Date()
            date = new Date(today.getFullYear(), today.getMonth(), today.getDate())
          }
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

        update={(id, name, image, date) => {
          const newArticles = [...this.state.articles]
          const index = newArticles.findIndex((a) => {
            return a.id === id
          })

          newArticles[index].name = name
          newArticles[index].image = image
          newArticles[index].date = date

          this.setState({
            articles: newArticles,
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
