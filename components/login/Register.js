import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const HandleRegisterCheck = async () => {
    if (!username) {
      setAlert("Tên đăng nhập không được trống!");
      return;
    }
    if (!password) {
      setAlert("Mật khẩu không được trống!");
      return;
    }
    if (!repassword) {
      setAlert("Vui lòng nhập lại mật khẩu!");
      return;
    }
    if (password != repassword) {
      setAlert("Mật khẩu không khớp!");
      return;
    }
    const newUser = {
      username: username,
      password: password,
    };
    const existingAccount = await AsyncStorage.getItem("user");
    if (existingAccount) {
      const parsedAccount = JSON.parse(existingAccount);
      parsedAccount.push(newUser);
      AsyncStorage.setItem("user", JSON.stringify(parsedAccount)).then(() => {
        AsyncStorage.getItem("user").then((res) => {
          console.log(res);
        });
      });
    } else {
      AsyncStorage.setItem("user", JSON.stringify([newUser])).then(() => {
        AsyncStorage.getItem("user").then((res) => {
          console.log(res);
        });
      });
    }
  };
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require("../../assets/images/cover.png")} resizeMode='cover' style={styles.image}>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user" size={30} color="white" />
            <TextInput style={styles.input} placeholder=" Email" placeholderTextColor={"white"} onChangeText={(e) => setUsername(e)}/>
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="white" />
            <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true} placeholderTextColor={"white"}  onChangeText={(e) => setPassword(e)}/>
          </View>
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="white" />
            <TextInput style={styles.input} placeholder=" Replay Password" secureTextEntry={true} placeholderTextColor={"white"} onChangeText={(e) => setRePassword(e)}/>
          </View>
         
        </View>
        <TouchableOpacity style={styles.button} onPress={() => HandleRegisterCheck()}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end', color: "white" }}>You have a account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Login</Text>
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
    color: "white",
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
    width:420
  },
});

export default Register;
