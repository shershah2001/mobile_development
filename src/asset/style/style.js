import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    height: '100%',
  },
  mainDiv: {
    display: 'flex',
    alignItems: 'center',
    ...Platform.select({
        ios: {
          shadowColor: 'rgba(10, 13, 22, 0.25)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 15,
        },
      }),
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
    paddingTop: 10,
    // backgroundColor:"red",
    width: 400,
    minHeight: 150,
    borderRadius: 10,
  },
  image: {
    height: 400,
    width: '100%',
    objectFit: 'cover',
    borderRadius: 15,
  },
  textDiv: {
    marginTop: 10,
  },
  cardHeading: {
    color: '#dde1e4',
    fontSize: 20,
    maxWidth: 350,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  cardpara: {
    color: '#91919a',
    maxWidth: 300,
    fontSize: 14,
    marginRight: 35,
    marginTop: 5,
  },
  view: {
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
    marginBottom: 15,
  },
});
