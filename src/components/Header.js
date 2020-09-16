import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  headerTitle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Header;
