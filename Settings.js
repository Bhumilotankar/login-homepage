import React,{useState} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity,Switch,StyleSheet } from 'react-native';
import styles from './Styles';

const Settings=({navigation})=>{
   
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
      };

      if(isEnabled)
      {
       <View style={styles.container}></View>
      }

      const handleLogout = () => {
        navigation.navigate('Logout');
      };
    
return (
    <View style={styles.color}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    

<TouchableOpacity style={styles.button} onPress={handleLogout}>
<Text style={styles.buttonText}>Logout</Text>
</TouchableOpacity>
</View>
    
)
};


export default Settings;