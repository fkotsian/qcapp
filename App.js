import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Login from './containers/Login'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  root: {
  },
});
