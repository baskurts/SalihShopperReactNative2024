import React from 'react';
import {View, Text, Pressable, SafeAreaView, BackHandler} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0.0}} />
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome to Shopper
          <Text style={styles.description}>
            {'\n' + '\n'}Shopper is a cross platform mobile application built
            using React Native.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It maintains its data using an SQLite database.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It allows its users to add, view, update, and delete
            shopping lists.
          </Text>
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable
          accessible={true}
          accessibilityRole='button'
          accessibilityLabel='Double tap to start shopping'
          accessibilityHint='Goes to lists screen'
          style={styles.button}
          onPress={() => navigation.navigate('Start Shopping!')}>
          <Text style={styles.buttonText}>Start Shopping!</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.buttonText}>Exit App!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;