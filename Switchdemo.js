import React from 'react';
import {View,Switch,StyleSheet} from 'react-native';

const Switchdemo = ({navigation}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
      const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
        <Text style={styles.text}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    lightContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    darkContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',
    },
  });

  export default Switchdemo;
  