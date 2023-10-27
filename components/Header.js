import React, { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 50,
      padding: 10,
      backgroundColor: '#ba9b7b',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

  return (
    <View style={styles.header}>
      <Text bold style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  );
};

export default Header;
