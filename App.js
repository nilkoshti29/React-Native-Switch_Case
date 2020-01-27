import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';

export default class App extends Component {

  constructor(){

    super();

    this.state={

      TextInput_Data : ''

    }
  }

  checkSwitch=(param)=>{

    switch(param) {

      case '1':
        this.ONE();
        break;
      
      case '2':
        this.TWO();
        break;

      case '3':
        this.THREE();
        break;

      case '4':
        this.FOUR();
        break;

      default:
        Alert.alert("NUMBER NOT FOUND");
    
      }

  }

  ONE=()=>{

    Alert.alert("ONE");

  }

  TWO=()=>{

    Alert.alert("TWO");

  }

  THREE=()=>{

    Alert.alert("THREE");

  }

  FOUR=()=>{

    Alert.alert("FOUR");

  }


  render() {

    return (

      <View style={styles.MainContainer}>

        <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ TextInput_Data: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          keyboardType = {"numeric"}
        />

        <TouchableOpacity onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)} activeOpacity={0.6} style={styles.button} >
 
          <Text style={styles.TextStyle}> GET RESULT </Text>

        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20

  },

  textInputStyle: {
 
    height: 40,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#028b53',
    borderRadius: 8,
    marginBottom: 15
  },

  button: {
    
    width: '80%',
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center'
  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }

});