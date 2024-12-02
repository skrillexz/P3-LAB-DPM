import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

const ProfileGallery = () => {
  const images = [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
    // Tambahkan URL gambar lainnya
  ];

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.galleryImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  galleryImage: {
    width: '30%',
    height: 120,
    margin: 5,
    borderRadius: 10,
  },
});

export default ProfileGallery;
