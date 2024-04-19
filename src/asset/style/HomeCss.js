import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container:{
  backgroundColor:'#292929',
  },
      divImage:{
      width:'100%',
      display:'flex',
      alignItems:'center',
      marginBottom:40,
      position:'relative'
      },
        image: {
            height:200,
            width:'90%',
            resizeMode:'cover',
            borderRadius:15,
            
          },
          imageTitle:{
            position:'absolute',
            bottom:10,
            left:40,
            color:'#ffffff',
            fontSize:25,
            fontWeight:'bold',
          },
          imageTitle1:{
            position:'absolute',
            left:40,
            top:70,
            color:'#fff',
            fontSize:25,
            fontWeight:'bold',
          },
          imagetext1:{
            position:'absolute',
            top:10,
            left:40,
            color:'#ffffff',
            fontSize:25,
            fontWeight:'bold',
          },
          imageText2:{
           position:'absolute',
           left:40,
           top:95,
           color:'#fff',
           fontSize:25,
           fontWeight:'bold',
          },
          imageText3:{
            position:'absolute',
            color:'#fff',
            bottom:55,
            left:40,
            fontSize:12,
          },
       
})

