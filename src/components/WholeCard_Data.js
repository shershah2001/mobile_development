import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import userData from './AllData';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../asset/style/style';
import {cardStyle} from '../asset/style/WholeCard_Css';
import {nextData, prevData} from './features/UserDetail';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
const WholeCard_Data = () => {
  const {user} = useSelector(state => state.app);
  const dispatch = useDispatch();

  // console.log(user);

  const previousHandler = () => {
    dispatch(prevData());
  };

  const nextHandler = () => {
    dispatch(nextData());
  };

  return (
    <View style={cardStyle.whole_container}>
      {/* whole  card start here */}
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={cardStyle.image_div}>
            <Image style={cardStyle.image} source={{uri: user.imageurl}} />
          </View>
          <Text style={cardStyle.title}>{user.title}</Text>
          <Text style={cardStyle.description}>{user.description}</Text>
          <Text style={cardStyle.Fulldescription}>{user.Fulldescription}</Text>
          <TouchableHighlight style={cardStyle.try_now_butn}>
            <LinearGradient
              colors={['#2777cc', '#278fd9', '#26c6fa']}
              style={cardStyle.linear_butn}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={{color: 'white'}}>{user.bname}</Text>
            </LinearGradient>
          </TouchableHighlight>
          <Text>{user.visibility}</Text>
        </View>
      </ScrollView>
      {/* whole card end here */}
      {/*next and prev button div start here  */}

      <View style={cardStyle.buttonsContainer}>
        <TouchableOpacity onPress={previousHandler} style={cardStyle.button}>
          <Fontisto
            name="step-backwrad"
            size={15}
            color={'#fff'}
            style={cardStyle.skip_butn_icon}
          />
          <Text style={cardStyle.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextHandler} style={cardStyle.button}>
          <Text style={cardStyle.buttonText}>Skip</Text>
          <Fontisto
            name="step-forward"
            size={15}
            color={'#fff'}
            style={cardStyle.skip_butn_icon}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={cardStyle.Butnflex}>
        <TouchableHighlight>
          <Text style={cardStyle.prev}>Prev</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={cardStyle.next}>Next</Text>
        </TouchableHighlight>
      </View> */}
      {/*next and prev button div end here  */}
    </View>
  );
};

export default WholeCard_Data;
