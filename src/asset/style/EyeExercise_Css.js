import {StyleSheet} from 'react-native';

const Eye_Css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282627',
    position:'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  gif: {
    width:500,
    height: 300,
    marginBottom: 30,
  },
  imageBelow_border:{
   borderWidth:1,
   height: 2,
   display:'flex',
   alignSelf:'flex-start',
   borderColor:'blue',
   width:5,
   marginBottom:25,
  },
  main_icon_div: {
    display: 'flex',
    alignItems: 'center',
  },
  icon_div: {
    transform: [{rotate: '180deg'}],
    marginLeft: 5,
  },
  timerContainer: {
    marginTop:5,
    marginBottom: 25,
  },
  timerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  touch_start_butn:{
    elevation:5,
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
  start_button: {
    backgroundColor: '#fff',
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
  Pause_txt:{
   color:'#fff',
   fontSize:18,
  },
  buttonsContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    left:10,
    right:10,
    bottom:30,
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
  volume_icons:{
    display:'flex',
    justifyContent:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  skip_butn_icon:{
    display:'flex',
    alignSelf:"center",
  },

});
export default Eye_Css;
