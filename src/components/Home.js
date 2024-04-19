import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeData} from './AllData';
import {styles} from '../asset/style/HomeCss';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const eye_excerise = id => {
    console.log(id);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/*  */}
      
        {/*  */}
        <FlatList
          data={HomeData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                eye_excerise(item.id);
                navigation.navigate('EyeExercise');
              }}>
              <View style={styles.divImage}>
                <Image style={styles.image} source={item.imageurl} />
                <Text style={styles.imagetext1}>{item.text1}</Text>
                <Text style={styles.imageTitle}>{item.title}</Text>

                <Text style={styles.imageTitle1}>{item.title1}</Text>
                <Text style={styles.imageText2}>{item.text2}</Text>
                <Text style={styles.imageText3}>{item.text3}</Text>
             
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
