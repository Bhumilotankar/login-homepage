import React, { useState,useRef,useEffect } from 'react';
import { View,Image, Text,  ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import styles from './Styles';


const Home = ({navigation}) => {
  const playerRef = useRef();
  let [patientsdata, setpatientsData] = useState([]);
  let [doctorsData,setdoctorsData] = useState([]);

  async function fetchData() {
    try {
      const doctorsResponse = await fetch('https://www.myjsons.com/v/8e2c1266')
      const jsonData1 = await doctorsResponse.json();
      let arrayData1 = await jsonData1.doctors;
      setdoctorsData(arrayData1);
      console.log('DATA');
      console.log(doctorsData);

      const Response = await fetch('https://www.myjsons.com/v/c8501270')
      const jsonData = await Response.json();
      let arrayData = await jsonData.patients;
      setpatientsData(arrayData);
      console.log('DATA');
      console.log(patientsdata);

    } catch (error) {
      console.log('error:',error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  
  const handleSettings=()=>{
    navigation.navigate('Settings');
  }


return (
<ScrollView>
      <View style={styles.homev}>
        <Text
          style={styles.hometext}>
          What Doctors Say
        </Text>
      </View>
      <View> 
      <ScrollView horizontal overScrollMode="never">
        {
              doctorsData.map(element => {
                console.log(element.video)
                return <View style={{margin: 30}}>
                    <YoutubePlayer
                      ref={playerRef}
                      height={160}
                      width={300}
                      videoId={element.video}
                      play={false}
                      volume={50}
                      playbackRate={1}
                    />
                   </View>
                 }
              )
      }
                    </ScrollView>
      </View>

      <View style={styles.homev}>
        <Text
          style={styles.hometext}>
          What Patients Say
        </Text>
      </View>
      <View> 
      <ScrollView horizontal overScrollMode="never">
        {
              patientsdata.map(element => {
                console.log(element.link)
                return <View style={{margin: 30}}>
                    <YoutubePlayer
                      ref={playerRef}
                      height={160}
                      width={300}
                      videoId={element.link}
                      play={false}
                      volume={50}
                      playbackRate={1}
                    />
                     <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri: element.image,
                        }}
                        style={{height: 40, width: 40, marginTop: 15,}}
                      />
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: 15,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 17,
                            textAlign: 'center',
                          }}>
                          {element.Name}
                        </Text>
                        </View>
                        </View>
                   </View>
                 }
              )
      }
                    </ScrollView>
      </View>

<TouchableOpacity style={styles.button} onPress={handleSettings}>
  <Text style={styles.buttonText}>Settings</Text>
</TouchableOpacity>

</ScrollView>
);
};


 
   
 
 
 

export default Home;



