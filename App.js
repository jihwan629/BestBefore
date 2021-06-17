import React from 'react';
import { StyleSheet } from 'react-native';
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'
import AsyncStroage from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

let today = new Date()

export default class App extends React.Component {
  state = {
    articles: [],
    id: 0,
  }

componentDidMount() {
  AsyncStorage.getItem('@diary:state').then((state) => {
    this.setState(JSON.parse(state))
  })
}

  save = () => {
    AsyncStorage.setItem('@diary:state', JSON.stringify(this.state))
  }

  render() {
    // 저장된 데이터 삭제
    //AsyncStorage.clear()

    return (
      <ContextProvider
        articles={this.state.articles}

        create={(name, image, date) => {
          if(date === undefined || date === '') {
            today = new Date()
            date = today.getFullYear() + ' ' + (today.getMonth() + 1) + ' ' + today.getDate()
          }
        
          this.setState({
            articles: [{
              id: this.state.id,
              image: image,
              name: name,
              date: date
            }].concat(this.state.articles),
            id: this.state.id + 1,
          }, this.save)
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
          }, this.save)
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
