import EStyles from 'react-native-extended-stylesheet';

const styles = EStyles.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 50,
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginHorizontal: 40,
    // alignSelf: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 20,
    marginBottom: 25,
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
