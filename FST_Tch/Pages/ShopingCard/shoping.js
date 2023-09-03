import styles from './shoping_style';
import React from 'react';
import { View, Text, FlatList,Image,ScrollView,TouchableOpacity } from 'react-native';

import { addToCart,removeFromCart } from '../Redux/SepetSlice';
import { BaseButton } from 'react-native-gesture-handler';

import { useSelector,useDispatch } from 'react-redux';

const Shopping = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);


  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  }
  return (
 

    
    <View style={styles.container}>
         <ScrollView>
      <Text style={styles.main_text}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product_container}>
            <Text style={styles.product_name}>{item.productName}</Text>
                      <Image
                  style={styles.products_Image}
                  source={{ uri: item.imageUrl }}
                />
                  <Text style={styles.price_text}>Price: {item.price} TL</Text>
                {cartItems.some((cartItem) => cartItem.id === item.id) && (
              <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
                <Text style={styles.basket_text}>Remove from Basket</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <View>
        <BaseButton style={styles.confirm_button}>
          <Text style={styles.confirm_text}>Confirm the Cart</Text>
          </BaseButton>
      </View>
          </ScrollView>
    </View>

  );
};

export default Shopping;
