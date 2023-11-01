import React, { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 100,
      padding: 10,
      backgroundColor: '#ba9b7b',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      position: 'absolute',
      bottom: 10
    },
  });

  return (
    <View style={styles.header}>
      <Text bold style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  );
};

export default Header;
