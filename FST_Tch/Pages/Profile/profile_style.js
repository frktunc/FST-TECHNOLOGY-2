import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1,
        backgroundColor:'#E7EAF5'
    },
    profile_image:{
        width:70,
        height:70,
       marginLeft:10,
       borderRadius:100,
       marginTop:30,
       flexDirection:'row'
    },
    profile_text:{
        fontSize:30,
        textAlign:'center'
    },
    profile_name:{
        paddingTop:20,
        textAlign:'center',
        fontSize:22

    },
    card_details:{
        margin:20,
        padding:20,
        paddingTop:50,
        
    },
    card_text:{
        fontSize:14,
        fontWeight:'bold'
    },
    selected_image:{
        width:200,
        height:200,
        borderRadius:100,
        marginLeft:100,
        marginTop:10
    }
    
        
    
})
export default styles;