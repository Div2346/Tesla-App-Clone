import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, NativeModules } from 'react-native';
import CarItems from './components/CarItems';
import CarList from './components/CarsList';

export default function App() {
 
 

  return (
    <View style={styles.container}>
    <CarList/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
