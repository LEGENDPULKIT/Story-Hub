import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      Author:'',
      Title:'',
      Story:'',
    }
  }
    render(){
    return (

      <View>
        <Header
    centerComponent={{text:'STORY HUB', style: { color: '#fff', fontSize: 20 }}}
    />
        <View>
          <TextInput
          style={styles.inputBox}
          placeholder="Title"
          onChangeText={(text) => {
            this.setState({ Title: text });
          }}
          value={this.state.Title}
        />
        </View>

        <View>
          <TextInput
          style={styles.inputBox}
          placeholder="Author"
          onChangeText={(text) => {
            this.setState({ Author: text });
          }}
          value={this.state.Author}
        />
        </View>

        <View>
          <TextInput
          style={styles.storyBox}
          placeholder="Story"
          onChangeText={(text) => {
            this.setState({ Story: text });
          }}
          value={this.state.Story}
        />
        </View>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 30,
      width: '20%',
      alignSelf: 'left',
      height: 40,
      textAlign: 'center',
      borderWidth: 3,
      outline: 'none',
    },
    storyBox: {
      width: '200%',
      alignSelf: 'left',
      height: 400,
      textAlign:'auto',
      borderWidth: 3,
      outline: 'none',
      justifyContent:'center',
      fontSize:20,
    },
  });
  