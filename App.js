import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Cronometro extends Component {

  constructor(props){
    super(props);
    this.state = {n:0, botao:'INICIAR'}; 
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.resetar = this.resetar.bind(this);

  }
  vai(){
    let s = this.state;
    if(this.timer != null ){
      //PARAR O TIMER
      clearInterval(this.timer);
      this.timer = null;
      s.botao = 'INICIAR';
    } else{
      //INICIAR O TIMER
      this.timer = setInterval(() => {
        let s = this.state;
        s.n += 0.1;
        this.setState(s);
      },100);
      s.botao = 'PARAR';
    }
    this.setState(s);
  }
  resetar(){
    if(this.timer != null ){
      //PARAR O TIMER
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({n:0, botao:'INICIAR'});

  }
  render(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}> Cronômetro</Text>
      <Image source={require('./images/relogio.png')}/>
      <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnText}>{this.state.botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.resetar}>
          <Text style={styles.btnText}>RESETAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#036',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 50,
    fontWeight:'bold',
    color:'#BAA07A',
    paddingBottom: 70,
  },
  timer:{
    color:'#BAA07A',
    fontSize: 75,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop: -155,
  },
  btnArea:{
    flexDirection:'row',
    height:40,
    marginTop:80,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#886532',
    height:40,
    borderRadius:5,
    margin:10,
  },
  btnText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FFF',
  }
});
