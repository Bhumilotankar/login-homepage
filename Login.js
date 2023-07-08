import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, StyleSheet,Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from './App';
import LoginErrors from './LoginErrors';
import NetInfo from '@react-native-community/netinfo';
import styles from './Styles';


const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiData, setApiData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaResult, setCaptchaResult] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

 
  const handleLogin =  async() => {
   
        const isConnected = await NetInfo.fetch().then((state) => state.isConnected);
        if (!isConnected) {
          setErrorMessage(LoginErrors.NETWORK_ERROR);
          return;
        }
        if (!name || !password) {
          if (!name) {
            setNameError(true);
            setErrorMessage(LoginErrors.INVALID_USERNAME);
    
          }
          if (!password) {
            setPasswordError(true);
            setErrorMessage(LoginErrors.INVALID_PASSWORD);
    
          }
          if(nameError && passwordError){
            setErrorMessage(LoginErrors.MISSING_FIELDS);
    
          }

          const answer = parseInt(userAnswer);
            if (answer === captchaResult) {
              setCaptchaResult(true);
              alert('Captcha passed!');
            generateCaptcha();
            } else {
           alert('Incorrect answer. Please try again.');
           };
         
          return;
        }
     
        const loggedIn = apiData.users.find((user) => user.username === name && user.password === password );
     
        if (loggedIn) {
          try {
            await AsyncStorage.setItem('loggedIn', 'true');
            navigation.replace('Home',{name:name});
          } catch (error) {
            console.log('Error:', error);
          }
        } else {
          alert('Invalid Login Credentials or Captcha');
        }
     
    };



  useEffect(() => {
    checkLoginStatus();
    getData();
  }, []);
  
  const getData = () => {
    fetch('https://www.myjsons.com/v/68d11224')
      .then((data) => data.json())
      .then((response) => {
        setApiData(response);
      });
  };
 
  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('loggedIn');
      if (isLoggedIn === 'true') {
        navigation.replace('Home',{name:name});
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const generateCaptcha = () => {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    setNum1(number1);
    setNum2(number2);
    setCaptchaResult(number1 + number2);
    setUserAnswer('');
  };

  const handleAnswerChange = (text) => {
    setUserAnswer(text);
  };

  

 
  
 
  return (
    <View>
      <View style={styles.a}>
         <Image source={require('./logo.jpeg')} style={styles.image} />
      </View>

      <Text style={styles.text}>Name</Text>
       <View style={{ flexDirection: 'row', alignItems: 'center',borderWidth: 1, borderRadius: 10,  width: 250, 
      height: 50, paddingLeft: 10,marginTop:12,marginLeft:60}}> 
        
        <TextInput maxLength={10}  style={styles.textin} onChangeText={(text) => {
           setName(text); 
           setNameError(false);
          }}
              value={name}
              placeholder=" Enter UserName"
        />
      </View>
      <Text style={styles.text}>Password </Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: 250,
        borderColor: passwordError ? 'red' : 'black', height: 50, paddingLeft: 10, marginTop: 12,marginLeft:60}}>
 
        <TextInput maxLength={10} style={styles.textin} onChangeText={(text) => {
           setPassword(text);
           setPasswordError(false);
          }}
              value={password}
              placeholder=" Enter Password" 
        />
      </View>

      <Text style={styles.text}>Enter Captcha</Text>
      <Text style={styles.captchaText}>{num1} + {num2} =</Text>

      <View style={{  flexDirection: 'row', alignItems: 'center',borderWidth: 1, borderRadius: 10,  width: 250, 
       borderColor: nameError ? 'red' : 'black', height: 50, paddingLeft: 10,marginTop:1,marginLeft:60}}> 
      <TextInput
        style={styles.textin}
        onChangeText={handleAnswerChange}
        value={userAnswer}
        keyboardType="numeric"
        placeholder=" Enter Captcha" 

      />
      </View>
    
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}


      <View style={styles.buttonview}>
    
      <TouchableOpacity onPress={generateCaptcha} >
      <View style={styles.view}>
      <Text style={styles.buttontext}>New Captcha</Text>
      </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} >
          <View style={styles.view}>
          <Text style={styles.buttontext}>LOGIN</Text>
          </View>
        </TouchableOpacity>
 
      </View>

 
    </View>
 
  );
 
};
 


export default Login;
