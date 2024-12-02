import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
