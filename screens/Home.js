import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Comments')}>
        Go to Comments
      </Button>
    </View>
  );
}
export default Home;
