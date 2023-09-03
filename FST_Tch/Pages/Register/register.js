import { Text, View,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, {useState,useEffect} from 'react'
import styles from './register_style'
import {Card, } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function RegisterScreen({navigation}) {
 
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  
  const saveUserInfo = async () => {
    try {
      const userInfo = { name, email, phone,adress,email };
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      
    } catch (error) {
      console.error('Bilgileri kaydederken hata oluştu:', error);
    }
  };
  

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const emailReg = /\S+@\S+\.\S+/;

    const userData = {
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
  };

  function onRegister(){
    if(!emailReg.test(email)) {
        showMessage({
            message:'Geçersiz E-posta',
            type:'danger'
        })
        return;
    }
    if(password.length<1) {
        showMessage({
            message:'Parolanız en az 1 rakam içermelidir',
            type: 'danger'
        })
        return;
    }
    if(password!==passwordConfirmation) {
        showMessage({
            message:'Şifreler Uyuşmuyor',
            type:'danger'
        })
        return;
    }
    handleRegister();
}

function handleRegister() { 

  
  
    axios.post('http://10.0.2.2:5275/Register', userData)
        .then(response => {
            Alert.alert('Kayıt Oluşturuldu ')
            navigation.navigate('Login');
           
        })
        .catch(error => {
          if(error.response) {
            console.log(error.response.userData);
          }
          else{
            console.log("HATA::::"+error)
            showMessage({
              message: 'Kayıt Yapılamadı Lütfen Tekrar deneyin',
              type: "danger",
            });
          }
            
           
           
          
        });
}

  
    return (
      <ScrollView>

      
      <View style={styles.container}>
    
        <View style={styles.bck_image}>
        <Image style={{width:380,height:300,resizeMode:'cover',borderRadius:15}} source={require('../../Pages/src/Assets/İmages/register.jpg')} />
        </View> 
        <Card containerStyle={styles.card_container}> 
     
     <Card.Divider />

        <View style={styles.main_text_container}>
        <Text style={styles.main_text}>Sign Up</Text>
        <TextInput style={styles.text_input}  
        placeholder='Name'
        onChangeText={(text) => setName(text)}
        value={name}
        />
        <TextInput  style={styles.text_input}
        placeholder='E-Mail'
        value={email}
        onChangeText={setEmail}
        
         />    
        <TextInput style={styles.text_input}  
        placeholder='Password'
        value={password}
        onChangeText={setPassword} 
        />
         <TextInput style={styles.text_input}  
        placeholder='Confirm Password'
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        />
          <TextInput  style={styles.text_input}  
        placeholder='Phone'
        onChangeText={(text) => setPhone(text)}
        value={phone}
      
        />
          <TextInput style={styles.text_input}  
        placeholder='Adress'
        multiline 
        onChangeText={(text) => setAdress(text)}
        value={adress}
        />
        <TouchableOpacity style={styles.button}onPress={saveUserInfo}  >
          <Text style={styles.buttonText}>Save my Information</Text>
        </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
            </View>    
            </Card>
      </View>
      </ScrollView>
    );
  }
  export default RegisterScreen