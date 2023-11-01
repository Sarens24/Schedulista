import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const appName = "Schedulista"

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title={appName} />
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: '100%'
  },
});
