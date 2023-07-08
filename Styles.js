import {StyleSheet} from 'react-native';
import Login from './Login';

const styles = StyleSheet.create({
    image:{ alignSelf: 'center',  height: 170,  width: 200},
    a:{alignItems: 'center', },
    text:{
        fontSize:18,
        marginTop:12,
        fontFamily:'times new roman',
        fontWeight:'bold',
        marginLeft:55,
        color:'black',
      },
      textin:{  flex: 1,color:'black' },
      captchaText:{color: 'black', fontSize: 24,marginBottom:7,marginLeft:60},
      errorText:{fontSize: 15,padding: 10,color:'red',marginLeft:45,marginTop:2},
      buttonview:{ padding: 15, margin: 35,marginTop:2},
      view:{ backgroundColor: '#1A5276', padding: 10, borderRadius: 20,marginTop:20},
      homev:{marginHorizontal: 30,marginTop:20},
      buttontext:{ color: 'white', textAlign: 'center',fontSize: 20},
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      hometext:{
        color: '#295C99',
        fontSize: 22,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#1A5276',
        borderRadius: 50,
        paddingVertical: 10,
        marginTop:25,
        width: 250,
        marginLeft:55,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
     
      color:{
        flex: 1,
        backgroundColor: 'black',
      },
     
});

export default styles;