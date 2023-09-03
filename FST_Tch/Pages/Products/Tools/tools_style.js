import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#dddddd'
    },
    products_container:{
        borderWidth:1,
        borderRadius:20,
        height:170,
        backgroundColor:'white',

    },
    main_text:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold'
    },
    products_Image:{
        width:100,
        height:100,
        borderRadius:10,
        resizeMode:'contain',
        
        
    },
    Product_Name_Text:{
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
       
    },
    productDescription_text:{
        marginLeft:10,
        marginTop:10,
        
        
    },
    fiyat_text:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        fontWeight:'bold'
    },
    basket_text:{
        color:'#935b5b',
        textDecorationLine:'underline'
    }
})
export default styles;