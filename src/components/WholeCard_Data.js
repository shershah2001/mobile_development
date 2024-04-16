import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import userData from './AllData';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../asset/style/style';
import {cardStyle} from '../asset/style/WholeCard_Css';
import { nextData, prevData } from './features/UserDetail';
const WholeCard_Data = () => {
  const { user } = useSelector(state => state.app);
  const dispatch = useDispatch();

  console.log(user);

  const previousHandler = () => {
    dispatch(prevData());
  };

  const nextHandler = () => {
    dispatch(nextData());
  };

  return (
    <>
      <ScrollView>
        <View>
          <Image style={cardStyle.image} source={{uri: user.imageurl}} />
          <Text>{user.title}</Text>
          <Text>{user.description}</Text>
          <Text>{user.Fulldescription}</Text>
          <Text>{user.bname}</Text>
          <Text>{user.visibility}</Text>
        </View>
      </ScrollView>
      <View style={cardStyle.Butnflex}>
        <View style={cardStyle.prev}>
          <Button title="Prev" onPress={previousHandler}></Button>
        </View>
        <View style={cardStyle.next} >
          <Button title="Next"
          onPress={nextHandler}
          ></Button>
        </View>
      </View>
    </>
  );
};

export default WholeCard_Data;
