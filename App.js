import React from 'react';
import { StyleSheet } from 'react-native';
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

        removeById={(id) => {
          const index = this.state.articles.findIndex((a) => {
            return a.id === id
          })   

          this.setState({ 
            articles: this.state.articles.filter((_, i) => i !== index)
          }, this.save)
        }}

        removeToday={() => {
          today = new Date()

          this.setState({ 
            articles: this.state.articles.filter((article) => {
              const splitDate = article.date.split(' ')

              return splitDate[0] != today.getFullYear()
                      ||  splitDate[1] != today.getMonth() + 1
                      ||  splitDate[2] != today.getDate()
          })
          }, this.save)
        }}

        removeExpired={() => {
          today = new Date()

          this.setState({ 
            articles: this.state.articles.filter((article) => {
              const splitDate = article.date.split(' ')
              const date = new Date(splitDate[0], splitDate[1] - 1, splitDate[2])
 
              return date >= new Date(today.getFullYear(), today.getMonth(), today.getDate())
          })
          }, this.save)
        }}

        // 저장된 데이터 삭제
        reset={() => {
          AsyncStorage.clear()
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
