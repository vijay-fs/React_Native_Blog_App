import React from 'react';
import {View, ScrollView, Dimensions, Image, TextInput} from 'react-native';
import {IconButton, Text, TouchableRipple} from 'react-native-paper';
import backbtn from '../Assets/backbtn.png';
import CardDesign from '../components/CardDesign';
import {useNavigation} from '@react-navigation/native';
function Comments() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          marginHorizontal: '5%',
          height: 80,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            // width: '37%',
            marginRight: '25%',
            borderWidth: 0.1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,

            backgroundColor: '#fff',
          }}>
          <TouchableRipple onPress={() => navigation.navigate('Home')}>
            <Image
              source={backbtn}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableRipple>
        </View>

        <Text style={{fontSize: 18, alignSelf: 'center'}}>Comments</Text>
      </View>
      <ScrollView
        removeClippedSubviews={true}
        overScrollMode="never"
        contentContainerStyle={{
          backgroundColor: '#fff',
          // minHeight: Dimensions.get('window').height,
        }}>
        <View style={{marginBottom: '20%'}}>
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
        }}>
        <TextInput
          placeholder="Write a comment"
          style={{
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 2,
            padding: 10,
            borderWidth: 0.1,
          }}
          multiline={true}
          maxLength={500}
        />
        <View
          style={{
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#6F30A9',
          }}>
          <Image
            source={require('../Assets/sendbtn.png')}
            style={{
              zIndex: 1,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default Comments;
