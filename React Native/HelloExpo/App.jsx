import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import { SafeAreaView } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <Text style={styles.texto1}>Raw ++!</Text>
        <Text style={styles.texto2}>Raw Linda!</Text>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
      </SafeAreaProvider>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
    
  },

  texto1: {
    color: 'red'
  },

  texto2: {
    color: 'blue',
  },

  container: {
    width: '100%',
    height: '100%',
    borderColor: 'blue',
    borderWidth: 3,
    borderStyle: 'dotted',
    backgroundColor: '#ffffff'
},
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 3,
//     borderColor: 'purple'
//   },
// });
