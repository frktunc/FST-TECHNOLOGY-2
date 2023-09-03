import { Text, View,Image,TextInput,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import styles from './login_style'
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';


function LoginScreen({navigation}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);



  const handleSignUp = () => {
    navigation.navigate('RegisterPage');
  }
 

  useEffect(() => {
    AsyncStorage.getItem('Kullanıcı Bilgileri')
        .then(value => {
            if (value !== null) {
                const storedValue = JSON.parse(value);
                setEmail(storedValue.email);
                setPassword(storedValue.password);
            }
        })
        .catch(error => {
            console.log('Bir hata oluştu:', error);
        });
}, []);

const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
}

  const handleLoginAndNavigate = () => {
    axios.post('http://10.0.2.2:5275/Login', {
        email: email,
        password: password
    })
        .then(response => {
            const responseData = response.data;

            if (responseData.success) {
                showMessage({
                    message: 'Giriş Başarılı',
                    type: 'success'
                })
                if (rememberMe) {
                    AsyncStorage.setItem('Kullanıcı Bilgileri', JSON.stringify({ email, password }))
                        .then(() => {
                            console.log('Giriş bilgileri kaydedildi');
                        })
                        .catch(error => {
                            console.log('Giriş bilgileri kaydedilemedi:', error);
                        });
                }
                navigation.navigate('Main');
            } else {
                showMessage({
                    message: 'Hata: Giriş Yapılamadı E-Posta veya Şifre Hatalı',
                    type: 'danger',
                })
            }

        })
        .catch(error => {
            showMessage({
                message: 'Hata: Giriş Yapılamadı Böyle Bir Kullanıcı Bulunamadı',
                type: 'danger',
            })


        })
}
    return (
      <View style={styles.container}>
        <View style={styles.bck_image}>
        <Image style={{width:420,height:300,resizeMode:'cover'}} source={require('../../Pages/src/Assets/İmages/tekno.jpg')} />
        </View> 
        <View style={styles.main_text_container}>
        <Text style={styles.main_text}>Sign In</Text>
        <TextInput  style={styles.text_input}
        placeholder='E-Mail'
        onChangeText={text => setEmail(text)}
        value={email}
         />    
        <TextInput style={styles.text_input}  
        placeholder='Password'
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
        />
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <CheckBox 
                        title='Remember Me'
                        checked={rememberMe}
                        onPress={toggleRememberMe}
                    />
                     </View>
        <TouchableOpacity style={styles.touchable_text}> 
            <Text style={styles.forget_text}>
             Forgot Password ?
                </Text>
            </TouchableOpacity>
                     
            <TouchableOpacity style={styles.button} onPress={ handleLoginAndNavigate}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
          <Text style={styles.buttonText}>Create an Acount</Text>
        </TouchableOpacity>
            </View>     
      </View>
    );
  }
  export default LoginScreen