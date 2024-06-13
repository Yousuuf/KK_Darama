import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../constants';

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title={'Press'}
        onPress={() => navigation.navigate(SCREEN.PROFILE)}
      />
    </View>
  );
};

export default Home;
