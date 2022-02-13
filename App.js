import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import components
import Keypad from './src/components/Keypad';

export default function App() {
  return (
    <View style={styles.container}>
      <Keypad />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    paddingTop: 40,
    padding: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
