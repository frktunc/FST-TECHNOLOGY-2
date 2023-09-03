import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eaeaea'
    },
    bck_image:{
        width:122,
        height:122,
    },
    main_text_container:{
        paddingTop:180,
    },
    main_text:{
        fontSize:32,
        fontWeight:'bold',

    },
    text_input:{
        marginTop:30,
        marginLeft:55,
        width:300,
        height:60,
        borderWidth:1,
        borderColor:'#156d6c',
        textAlign:'center',
        borderRadius:10,
        color:'#07214f',
        textAlign:'center',
        backgroundColor:'white'

    },
    forget_text:{
    fontSize:20
    },
    touchable_text:{
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor: '#0547b2',
        marginLeft:57,
        marginRight:57,
        marginTop:20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText:{
        color:'white'
    }
})
export default styles;