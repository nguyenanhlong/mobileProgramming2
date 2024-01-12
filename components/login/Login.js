import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const accounts = await AsyncStorage.getItem("user");
    if (accounts) {
      const accountArray = JSON.parse(accounts);

      accountArray.forEach((account) => {
        if (username === account.username && password === account.password) {
          navigation.navigate("Home");
          return;
        } else {
          alert("kiem tra lai thong tin dang nhap");
          return;
        }
      });
    }
  };
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require("../../assets/images/cover.png")} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user" size={30} color="white" />
            <TextInput style={styles.input} placeholder=" User" placeholderTextColor={"white"} onChangeText={(e) => setUsername(e)}/>
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="white" />
            <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true} placeholderTextColor={"white"}  onChangeText={(e) => setPassword(e)}/>
          </View>
          <Text style={{ alignSelf: 'flex-end', color: "white" }}>Forgot Password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end', color: "white" }}>You not have a account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'white',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,    
    paddingHorizontal: 10,
    color: "white",
  },
  button: {
    backgroundColor: '#3399FF',
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    width: 300,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420  }
});

export default Login;
