import React, { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  const styles = StyleSheet.create({
    header: {
      height: 50,
      padding: 10,
      backgroundColor: '#000',
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
