import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      //alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: '#FDF6AA',
      
    },
    text: {
        color: "#2C2C2C",
        //rn이 자동으로 20px로 변환시켜줌
        fontSize: 30,

    }
    
  });