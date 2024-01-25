import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome  } from '@expo/vector-icons';
import Header from '../Header';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.profileInfoContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glyphicon/64/profil-circle-1024.png' }}
        />
        <Text style={styles.userName}>Anh Long</Text>
        <Text style={styles.userInfo}>Tester</Text>
        <Text style={styles.userInfo}>Location: Việt Nam</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome name="pencil" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Login')}>
            <Entypo name="log-out" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginStart: 10,
    marginEnd: 10,
  },
  header: {
    marginTop:10,
    marginBottom:10,
  },
  profileInfoContainer: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  editButton: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '65%',
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
});
