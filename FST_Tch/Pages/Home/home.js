import { Text, View, windowHeight, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../Home/home_style';
import { Card, } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Slider = [
    require('../src/Assets/İmages/slider1.jpeg'),
    require('../src/Assets/İmages/slider2.jpg'),
    require('../src/Assets/İmages/slider3.jpg'),
    require('../src/Assets/İmages/slider4.jpg'),
]


function HomeScreen({ navigation }) {

    function handleTabletUp() {
        navigation.navigate('Tablet')
    }
    function handleTvUp() {
        navigation.navigate('Tv')
    }
    function handlepcUp() {
        navigation.navigate('Pc')
    }
    function handlePhoneUp() {
        navigation.navigate('Phone')
    }
    function handleToolsUp() {
        navigation.navigate('Tools')
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Card containerStyle={styles.card_container} >
                    <Card.Title style={styles.yrd_text}>Welcome to FST Technology</Card.Title>
                    <Card.Divider />
                    <SliderBox
                        images={Slider}
                        sliderBoxHeight={windowHeight * 0.3}

                        dotColor="#5e6bff"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop
                        resizeMode="cover"
                        ImageComponentStyle={{
                            width: 450,
                            height: 200,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            marginRight: 170,
                        }}
                    />
                </Card>
                <View>
                    <Text style={styles.categori_text}>Categories</Text>
                    <Card containerStyle={styles.products_card}>


                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={handleTabletUp}>
                                <Image style={styles.kategori_image} source={require('../src/Assets/İmages/tablet.jpg')} />
                                <Text style={styles.products_text}>Tablet</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handlepcUp}>
                                <Image style={styles.kategori_image} source={require('../src/Assets/İmages/pc.jpg')} />
                                <Text style={styles.products_text}>Pc</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handlePhoneUp}>
                                <Image style={styles.kategori_image} source={require('../src/Assets/İmages/telefon.jpg')} />
                                <Text style={styles.products_text}>Phone</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleToolsUp}>
                                <Image style={styles.kategori_image} source={require('../src/Assets/İmages/mutfak.jpg')} />
                                <Text style={styles.products_text}>Tools</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleTvUp}>
                                <Image style={styles.kategori_image} source={require('../src/Assets/İmages/tv.jpg')} />
                                <Text style={styles.products_text}>Tv</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </Card>
                    <Card>
                        <Card.Title style={styles.yrd_text}>Trending Deals</Card.Title>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: 'https://resim.epey.com/851617/b_msi-titan-gt77-12uhs-037tr-1.jpg' }} style={{ width: 100, height: 100 }} />
                                <Text style={{ fontWeight: 'bold' }}>MSI Titan GT77HX 13VI</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>185.549 => 170.000 TL </Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: 'https://resim.epey.com/809161/b_apple-iphone-14-plus-512gb-1.jpg' }} style={{ width: 100, height: 100 }} />
                                <Text style={{ fontWeight: 'bold' }}>Apple iPhone 14 Plus</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>50.049 => 43.000 TL </Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>


        </ScrollView>
    )
}
export default HomeScreen;