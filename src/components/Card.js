import React, { useRef } from 'react';
import { View, Text, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../asset/style/style';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux'
import userData from './AllData';
import { addData } from './features/UserDetail';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Card = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dynamic_health_card = (id) => {
    console.log(id)
    dispatch(addData(id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback 
          onPress={() => {
            dynamic_health_card(item.id);
            navigation.navigate("WholeCard_Data");
          }}>
            <View style={styles.mainDiv}>
              <LinearGradient colors={['#0a0d16', "#0a0d16E0"]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.div}
              >
                <Image style={styles.image} source={{ uri: item.imageurl }} />
                <View style={styles.textDiv}>
                  <Text style={styles.cardHeading}>{item.title}</Text>
                  <Text style={styles.cardpara}>{item.description}</Text>
                  <Text style={styles.view}>{item.view}</Text>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </SafeAreaView>
  );
};

export default Card;
