import React from 'react';
import {View, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import backbtn from '../Assets/backbtn.png';
import avatarpng from '../Assets/avatarpng.jpg';

function CardDesign() {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignContent: 'space-between',
        width: '100%',
        height: 200,
        position: 'relative',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '90%',
          marginHorizontal: '5%',
          height: 50,
          marginTop: 20,
        }}>
        <View style={{width: '15%'}}>
          <Image
            source={avatarpng}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              marginRight: 10,
            }}
          />
        </View>
        <View style={{width: '85%'}}>
          <Card
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 10,
              height: 150,
            }}>
            <Text style={{fontSize: 16}}>Annette Black</Text>
            <Text style={{fontSize: 10, marginTop: 4}}>20 April at 4.20pm</Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                textAlign: 'left',
                fontWeight: '600',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              feugiat odio non risus lacinia, vitae suscipit ligula feugiat.
            </Text>
          </Card>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',

              marginVertical: '3%',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 4,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              Edit
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 4,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              |
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 4,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              Delete
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CardDesign;
