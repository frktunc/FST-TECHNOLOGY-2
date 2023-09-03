import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fcff4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    product_container: {
        marginTop: 25,
        borderWidth: 1,
        width: 370,
        height: 150,
        borderRadius: 7,
        backgroundColor: 'white'

    },
    main_text: {
        fontSize: 32,
        textAlign:'center',
        color:'white'
    },
    products_Image: {
        width:100,
        height: 150,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
  
        flex: 1,
        aspectRatio: 1

    },
    product_name: {
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center'
    },
    price_text: {
        position: 'absolute',
        marginTop: 110,
        marginLeft: 250,
        fontWeight:'700'
    },
    confirm_button:{
        marginTop:10,
        marginBottom:10,
        backgroundColor:'black',
        borderWidth:1,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    confirm_text:{
        fontSize:22,
        textAlign:'center',
        color:'white',
        
    },
    basket_text:{
        color:'red'
    }
})
export default styles;