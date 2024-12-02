import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const profileData = [
  { id: '1', label: 'Followers', value: '120' },
  { id: '2', label: 'Following', value: '180' },
  { id: '3', label: 'Posts', value: '0' },
];

const posts = [
  { id: '1', image: 'https://via.placeholder.com/150' },
  { id: '2', image: 'https://via.placeholder.com/150' },
  { id: '3', image: 'https://via.placeholder.com/150' },
];

const reels = [
  { id: '1', image: 'https://via.placeholder.com/150' },
  { id: '2', image: 'https://via.placeholder.com/150' },
];

const tagged = [
  { id: '1', image: 'https://via.placeholder.com/150' },
  { id: '2', image: 'https://via.placeholder.com/150' },
];

const { width } = Dimensions.get('window'); // Mendapatkan lebar layar perangkat

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Posts'); // State untuk tab aktif

  const renderContent = () => {
    // Fungsi untuk mengganti konten berdasarkan tab
    let dataToRender = [];
    if (selectedTab === 'Posts') {
      dataToRender = posts;
    } else if (selectedTab === 'Reels') {
      dataToRender = reels;
    } else if (selectedTab === 'Tagged') {
      dataToRender = tagged;
    }

    return (
      <View style={styles.postsContainer}>
        {dataToRender.map((item) => (
          <View key={item.id} style={styles.postBox}>
            <Image
              source={{ uri: item.image }} // URL gambar
              style={styles.postImage}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileWrapper}>
        {/* Profil Image dan Nama di kiri */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://instagram.fbth8-1.fna.fbcdn.net/v/t51.2885-19/467872600_1083089899956142_7343555716497776650_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbth8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=X7uopg4uwwgQ7kNvgH-1LBs&_nc_gid=4a89319dc1f44ea59b025fd86d5d272c&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBj1YodG6cH_JZs6ExmZrOOWfUKpqnuB3cAzs8UDoBhVg&oe=674B2776&_nc_sid=7a9f4b',
            }} // Ganti dengan URL atau path gambar profil Anda
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>hannn</Text>
        </View>

        {/* Info seperti Followers, Following, dan Posts sejajar secara horizontal di samping profil */}
        <View style={styles.infoContainer}>
          {profileData.map((item) => (
            <View key={item.id} style={styles.infoItem}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Lingkaran dengan tanda tambah di tengah antara nama dan navbar */}
      <View style={styles.newCircleContainer}>
        <View style={styles.newCircle}>
          <Text style={styles.plusSign}>+</Text>
        </View>
        <Text style={styles.newText}>New</Text>
      </View>

      {/* Tabs untuk Posts, Reels, dan Tagged */}
      <View style={styles.tabContainer}>
        {['Posts', 'Reels', 'Tagged'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabItem,
              selectedTab === tab && styles.activeTab, // Gaya aktif untuk tab yang dipilih
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={selectedTab === tab ? styles.activeTabText : styles.tabText}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Konten berdasarkan tab yang dipilih */}
      {renderContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  profileContainer: {
    alignItems: 'center',
    marginRight: 15,
    flexShrink: 1,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
  infoItem: {
    marginHorizontal: 10,
    flexShrink: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 14,
    color: '#555',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabItem: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  postsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  postBox: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  newCircleContainer: {
    alignItems: 'center',
    marginBottom: 15, // Jarak antara lingkaran dan navbar
    marginTop: -15, // Untuk menyelaraskan lebih dekat ke profile
    right: 125,
  },
  newCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  newText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default ProfileScreen;
