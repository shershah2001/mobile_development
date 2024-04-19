import { StyleSheet } from "react-native";
export const cardStyle = StyleSheet.create({
    whole_container:{
     backgroundColor:'#1d1d1d',
     height:'100%',
    },
    title:{
        color: '#ffffff',
        fontSize: 20,
        maxWidth: 350,
        letterSpacing: 0.8,
        lineHeight:30,
    },
    description:{
     color:'#fff',
     maxWidth:369,
     marginTop:10,
     lineHeight:22,
     fontSize:16,
    },
    Fulldescription:{
        color:'#fff',
        maxWidth:359,
        marginTop:10,
        lineHeight:22,
        fontSize:16,
        marginLeft:10,
    },
    image_div:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginBottom:15,
        elevation:5,
    },
    image: {
        height:350,
        width: 350,
        resizeMode: 'cover',
        borderRadius:15,
      },
  
    try_now_butn:{
     marginTop:40,
     marginBottom:80,
    },
    linear_butn:{
        width:250,
        height:50,
        textAlign:'center',
        lineHeight:50,
        borderRadius: 25,
        fontSize:18,
        color:'rgb(104, 187, 227)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
      buttonsContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        left:10,
        right:10,
        bottom:0,
        height:70,
        backgroundColor:'#1d1d1d'
      },
    
      button: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 5,
        display:'flex',
        flexDirection:'row',
        columnGap:10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      skip_butn_icon:{
        display:'flex',
        alignSelf:'center',
      },
   
})