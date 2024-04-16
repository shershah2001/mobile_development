import { StyleSheet } from "react-native";
export const cardStyle = StyleSheet.create({
    Butnflex:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height:50,
        paddingLeft:10,
        paddingRight:10,
        columnGap:10,
        width:'100%',
    },
    prev:{
        width:150,
    },
    next:{
        width:150,
    },
    image: {
        height: 400,
        width: '100%',
        objectFit: 'cover',
      }
})