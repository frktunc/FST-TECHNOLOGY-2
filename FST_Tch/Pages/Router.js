import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import LoginScreen from './Login/login';
import RegisterScreen from './Register/register';
import HomeScreen from './Home/home';
import ProfileScreen from './Profile/profile';
import ShopingScreen from './ShopingCard/shoping';
import TabletScreen from './Products/Tablet/tablet';
import PcScreen from './Products/Pc/pc';
import PhoneScreen from './Products/Phone/phone';
import ToolsScreen from './Products/Tools/tools';
import TvScreen from './Products/Tv/tv';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (name) => ({ color }) => (
  <Icon name={name} size={20} color={color} />
);

function MainTabs() {
  return (
   

   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#6d8dff' },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'white',
        tabBarIcon: TabBarIcon(route.name === 'Home' ? 'home' : route.name === 'Shoping' ? 'shopping-cart' : 'user'),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shoping" component={ShopingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator>
    
  );
}

export default function App() {
  return (
 

  <Provider store= {store}>

  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterPage" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
        <Stack.Screen name="Tools" component={ToolsScreen} />
        <Stack.Screen name="Tv" component={TvScreen} />
        <Stack.Screen name="Tablet" component={TabletScreen} />
        <Stack.Screen name="Pc" component={PcScreen} />
      

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
     </Provider>
  );
}
