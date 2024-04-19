import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import Eye_Css from '../asset/style/EyeExercise_Css';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const ButtonStates = {
  START: 'Start Exercise',
  PAUSE: 'Pause',
  CONTINUE: 'Continue',
};
const EyeExercise = () => {
  const [buttonState, setButtonState] = useState(ButtonStates.START);
  const [isRunning, setIsRunning] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const exercises = [
    {name: 'Exercise 1', gif: require('../gif/normal/gif1.gif')},
    {name: 'Exercise 2', gif: require('../gif/normal/gif2.gif')},
    {name: 'Exercise 3', gif: require('../gif/normal/gif3.gif')},
    {name: 'Exercise 4', gif: require('../gif/normal/gif4.gif')},
    {name: 'Exercise 5', gif: require('../gif/normal/gif5.gif')},
    {name: 'Exercise 6', gif: require('../gif/normal/gif6.gif')},
    {name: 'Exercise 7', gif: require('../gif/normal/gif7.gif')},
    {name: 'Exercise 8', gif: require('../gif/normal/gif8.gif')},
    {name: 'Exercise 9', gif: require('../gif/normal/gif9.gif')},
    {name: 'Exercise 10', gif: require('../gif/normal/gif10.gif')},
    {name: 'Exercise 11', gif: require('../gif/normal/gif11.gif')},
    {name: 'Exercise 12', gif: require('../gif/normal/gif12.gif')},
    {name: 'Exercise 13', gif: require('../gif/normal/gif13.gif')},
  ];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (timer === 1) {
          if (currentExerciseIndex < exercises.length - 1) {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
          } else {
            setCurrentExerciseIndex(0);
          }
          setTimer(30);
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, currentExerciseIndex, exercises.length, isRunning]);

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    } else {
      setCurrentExerciseIndex(exercises.length - 1);
    }
    setTimer(30);
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setCurrentExerciseIndex(0);
    }
    setTimer(30);
  };

  // Format the timer as "00:00"
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    // return ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds};
  };

  // toggle button logic start here
  const handlePress = () => {
    switch (buttonState) {
      case ButtonStates.START:
        setButtonState(ButtonStates.PAUSE);
        setIsRunning(true);
        break;
      case ButtonStates.PAUSE:
        setButtonState(ButtonStates.CONTINUE);
        setIsRunning(false);
        break;
      case ButtonStates.CONTINUE:
        setButtonState(ButtonStates.PAUSE);
        setIsRunning(true);
        break;
      default:
        setButtonState(ButtonStates.START);
        break;
    }
  };
  const renderButtonContent = () => {
    switch (buttonState) {
      case ButtonStates.PAUSE:
        return (
          <LinearGradient
            colors={['#2777cc', '#278fd9', '#26c6fa']}
            style={Eye_Css.linear_butn}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={Eye_Css.Pause_txt}>
              <AntDesignIcons
                style={Eye_Css.pause_icon}
                name="pause"
                size={20}
                // color={'#fff'}
              />
              Pause
            </Text>
          </LinearGradient>
        );
      case ButtonStates.CONTINUE:
        return <Text style={Eye_Css.start_button}>Continue</Text>;
      case ButtonStates.START:
      default:
        return <Text style={Eye_Css.start_button}>Start Exercise</Text>;
    }
  };
  const borderStyle = {
    width: `${(currentExerciseIndex / (exercises.length - 1)) * 100}%`, // Dynamic
  };
  return (
    <View style={Eye_Css.container}>
      {/* image div start here */}
      <View style={Eye_Css.gif_main_div}>
        <View style={Eye_Css.gid_div}>
          <Image
            source={exercises[currentExerciseIndex].gif}
            style={Eye_Css.gif}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* image div end here */}
      {/* border start here  */}
      <View style={[Eye_Css.imageBelow_border, borderStyle]}>
      </View>
      {/* border end here */}
      {/* Text and icon div start here */}
      <View>
        <Text style={Eye_Css.title}>
          BLINKING EXERCISE
          <View style={Eye_Css.main_icon_div}>
            <View style={Eye_Css.icon_div}>
              <AntDesignIcons
                name="exclamationcircleo"
                size={18}
                color="#fff"
              />
            </View>
          </View>
        </Text>
      </View>
      {/* Text and icon div end here */}
      <View style={Eye_Css.timerContainer}>
        <Text style={Eye_Css.timerText}>00 : {timer}</Text>
      </View>
      {/* start exercise button start here */}
      <TouchableHighlight
        onPress={handlePress}
        style={Eye_Css.touch_start_butn}>
        {renderButtonContent()}
      </TouchableHighlight>
      {/* start exercise button end here */}
      <View style={Eye_Css.buttonsContainer}>
        {currentExerciseIndex > 0 && (
          <TouchableOpacity
            onPress={handlePreviousExercise}
            style={Eye_Css.button}>
            <Fontisto
              name="step-backwrad"
              size={15}
              color={'#fff'}
              style={Eye_Css.skip_butn_icon}
            />
            <Text style={Eye_Css.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentExerciseIndex > 0 &&
          currentExerciseIndex < exercises.length - 1 && (
            <View style={Eye_Css.volume_icons}>
              <FontAwesome name="volume-off" size={30} color={'#a09c9b'} />
            </View>
          )}
        {currentExerciseIndex < exercises.length - 1 && (
          <TouchableOpacity onPress={handleNextExercise} style={Eye_Css.button}>
            <Text style={Eye_Css.buttonText}>Skip</Text>
            <Fontisto
              name="step-forward"
              size={15}
              color={'#fff'}
              style={Eye_Css.skip_butn_icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EyeExercise;
