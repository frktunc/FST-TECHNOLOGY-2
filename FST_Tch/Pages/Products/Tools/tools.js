

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import styles from './tools_style';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/SepetSlice';

const Tools = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://10.0.2.2:5275/api/Products/4';

    axios.get(apiUrl)
      .then(response => {
        console.log(response.data)
        setProducts(response.data);
        console.log('başarılı')
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  }, []);

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.main_text}>Tools Shop</Text>

      </View>


      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, padding: 5, paddingBottom: 20 }}>
              <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                <Text style={styles.basket_text}>Add to Basket</Text>
                </TouchableOpacity>
            <View style={styles.products_container}>
              <Text style={styles.Product_Name_Text}>{item.productName}</Text>

              <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                <Image
                  style={styles.products_Image}
                  source={{ uri: item.imageUrl }}
                />
                <Text style={styles.productDescription_text}>-{item.productDescription} </Text>
              </View>
              <Text style={styles.fiyat_text}>Price:{item.price} TL</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Tools;

