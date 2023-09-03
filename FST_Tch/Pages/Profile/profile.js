import { Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './profile_style';
import { Card } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';



function ProfileScreen() {
  const profileImages = [
    require('../src/Assets/İmages/3D_1.jpg'),
    require('../src/Assets/İmages/3D_2.jpg'),
    require('../src/Assets/İmages/3D_3.jpg'),
    require('../src/Assets/İmages/3D_4.jpg'),
    require('../src/Assets/İmages/3D_5.jpg')
  ];

  const [userInfo, setUserInfo] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);



  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo) {
          const parsedUserInfo = JSON.parse(storedUserInfo);
          setUserInfo(parsedUserInfo);
        }
      } catch (error) {
        console.error('Bilgileri getirirken hata oluştu:', error);
      }
    }

    fetchUserInfo();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <ScrollView>


    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.profile_text}>Profile</Text>
        <View style={{flexDirection:'row',padding:-5,margin:3,justifyContent:'center',alignItems:'center'}}>
        {profileImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
            <Image style={styles.profile_image} source={image} />
          </TouchableOpacity>
        ))}
        </View>
        <Text style={styles.profile_name}>Faruk Serhat TUNÇ</Text>
        <Card containerStyle={styles.card_details}>
          <Text style={styles.card_text}>𝔽𝕌𝕃𝕃 ℕ𝔸𝕄𝔼 : {userInfo.name}</Text>
          <Text style={styles.card_text}>ℙℍ𝕆ℕ𝔼 : {userInfo.phone}</Text>
          <Text style={styles.card_text}>𝔼𝕄𝔸𝕀̇𝕃 𝔸𝔻ℝ𝔼𝕊𝕊 : {userInfo.email}</Text>
          <Text style={styles.card_text}>𝕊ℍ𝕆ℙℙ𝕀̇ℕ𝔾 𝔸𝔻ℝ𝔼𝕊 : {userInfo.adress}</Text>
        </Card>
      </View>
      {selectedImageIndex !== null && (
        <View>
          <Image
            style={styles.selected_image}
            source={profileImages[selectedImageIndex]}
          />
        </View>
      )}
    </View>
    </ScrollView>
  );
}

export default ProfileScreen;
