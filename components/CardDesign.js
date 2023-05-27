import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import avatarpng from '../Assets/avatarpng.jpg';

function CardDesign(props) {
  const handleDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = () => {
    props.handleEdit(props.id, props.comment, props.name);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.avatarContainer}>
            <Image source={avatarpng} style={styles.avatarImage} />
          </View>
          <View style={styles.contentContainer}>
            <Card style={styles.card}>
              <View>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.dateText}>20 April at 4.20pm</Text>
                <Text style={styles.commentText}>{props.comment}</Text>
              </View>
            </Card>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <Text style={styles.separator}>|</Text>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
  },
  avatarContainer: {
    width: '15%',
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  nameText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    color: '#27374D',
  },
  dateText: {
    fontSize: 9,
    marginTop: 4,
    fontFamily: 'Roboto-Regular',
    color: '#a7a7a7',
    fontWeight: '700',
  },
  commentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    marginTop: 20,
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: '3%',
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: '600',
  },
  separator: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default CardDesign;
