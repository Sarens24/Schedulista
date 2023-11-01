import React, { View } from 'react-native';

const AddEventDialog = ({ visible }) => {

    if (!visible)
        return null;

  return (
    <View style={{ backgroundColor: '#77bdb9' }}>
        <h1>Add Event Dialog Goes Here!</h1>
    </View>

  );

};

export default AddEventDialog;