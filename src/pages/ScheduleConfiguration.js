import React, { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddEventDialog from '../components/AddEventDialog';

const ScheduleConfiguration = () => {

    const [isVisible, setIsVisible] = useState(false)

    const openAddEventDialog = () => {
        setIsVisible(!isVisible)
    }

  return (
    <View style={styles.container}>
        <Button
            containerStyle={{
                position: 'absolute',
                bottom: 0
            }}
            buttonStyle={{
                backgroundColor: 'transparent'
            }}
            icon={
                <MaterialCommunityIcons 
                    name="plus-circle"
                    color='white'
                    size={80}
                    style={{
                        padding: 10,
                    }}
                />    
            }
            onPress={() => openAddEventDialog()}
        />
        <AddEventDialog visible={isVisible} />
    </View>
  );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#77bdb9',
        flexDirection: 'row',
        justifyContent: 'center'
    },
  });

export default ScheduleConfiguration