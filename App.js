import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View></View>
      {/* App Name and Welcome */} 
      <View></View> 
      <View> 
        <TextInput placeholder='Username/Email'/>
        <TextInput placeholder='Password'/>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.buttonText}>Sign In</Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.buttonText}>Login</Text>
            </View> 
          </TouchableOpacity>
        </View>
      </View>
      {/* Continue as Guest */}
      <View></View>
    </View> 
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    padding: '5%',
  },
  button: {
    margin: 0,
    padding: '2%',
    width: '40%',
    borderColor: '#cccccc',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  }
});
