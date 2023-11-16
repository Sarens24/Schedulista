import React, { View, StyleSheet, Modal } from 'react-native';
import TextInput from './STextInput'

export default function AddEventDialog({ visible }) {

  if (!visible)
      return null;


  return (
      <Modal
        animationType="slide"
        transparent={true}
      >
        <View
          style={styles.container}
        >
          <View
            style={styles.modal}
          >
            <TextInput 
              label='Event Title'
            />
          </View>        
        </View>

      </Modal>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#636380',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});  
