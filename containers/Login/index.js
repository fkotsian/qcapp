import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';


export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.logIn = ::this.logIn
    this.setEmail = ::this.setEmail
    this.setPassword = ::this.setPassword
    this.state = {
      email: '',
      password: '',
    }
  }

  logIn() {
    Alert.alert('Logging in!')
  }

  setEmail(val) {
    this.setState({
      email: val
    })
  }

  setPassword(val) {
    this.setState({
      password: val
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
      <View style={styles.root}>
        <Text style={styles.header}>Welcome to QCApp!</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              style={styles.input}
              value={this.state.email}
              onChangeText={this.setEmail}
              autocorrect='false'
              keyboardType='email-address'
              selectTextOnFocus={true}
            />
          </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Password'
            style={styles.input}
            value={this.state.password}
            onChangeText={this.setPassword}
            autocorrect='false'
            secureTextEntry={true}
            selectTextOnFocus={true}
          />
        </View>
        <TouchableHighlight
        >
          <View>
            <Button
              title="Sign In!"
              onPress={this.logIn}
            />
          </View>
        </TouchableHighlight>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 42,
    color: '#d3d3d3',
    textAlign: 'center',
    marginBottom: 42,
  },
  inputContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 6,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 16,
    width: 250,
  },
});
