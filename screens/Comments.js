import React, {useEffect, useState, useMemo, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUsersFetch,
  postCommentsData,
  deleteCommentsData,
  editCommentsData,
} from '../actions';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';
import {IconButton, Text, TouchableRipple} from 'react-native-paper';
import backbtn from '../Assets/backbtn.png';
import CardDesign from '../components/CardDesign';
import {useNavigation} from '@react-navigation/native';

function Comments() {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [commentId, setCommentId] = useState('');
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.getusers.users);
  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);
  const handlePress = () => {
    dispatch(postCommentsData(data));
    setData('');
  };
  const handleDelete = async id => {
    dispatch(deleteCommentsData(id));
  };
  const handleEdit = async (id, comments, name) => {
    console.log(id, comments, name, 'id edit');
    setCommentId(id);
    setData(comments);
    setEdit(true);
    focusInputWithKeyboard();
  };
  const EditPost = async () => {
    console.log(commentId, data, 'edit post trigger');
    dispatch(editCommentsData(commentId, data));
    setEdit(false);
    setData('');
  };
  const focusInputWithKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    if (edit) {
      focusInputWithKeyboard();
    }
  }, [edit]);

  const Users = useMemo(() => {
    return users.map((user, index) => {
      console.log(user, 'use memo user');
      return (
        <CardDesign
          key={index}
          name={user.name}
          comment={user.comment}
          id={user._id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      );
    });
  }, [users]);

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
                width: 20,
                height: 20,
              }}
            />
          </TouchableRipple>
        </View>

        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
            fontFamily: 'Roboto',
            fontWeight: '600',
          }}>
          Comments
        </Text>
      </View>
      <ScrollView
        removeClippedSubviews={true}
        overScrollMode="never"
        contentContainerStyle={{
          backgroundColor: '#fff',
        }}>
        <View style={{marginBottom: '20%'}}>{Users ? Users : null}</View>
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
          ref={inputRef}
          value={data}
          onChangeText={setData}
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
        <TouchableOpacity onPress={edit ? EditPost : handlePress}>
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Comments;
