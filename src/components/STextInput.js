import * as React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native'
import { FieldError } from 'react-hook-form'

export default React.forwardRef(
  (props, ref) => {
    const { label, labelStyle, error, ...inputProps } = props

    return (
      <View style={styles.container}>
        {label && <Text style={styles.text} >{label}</Text>}
        <TextInput
          style={styles.textinput}
        />
        <Text>{error && error.message}</Text>
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black'
  },
  text: {
    margin: 4,
    color: 'white'
  },
  textinput: {
    margin: 4,
    color: 'white'
  }
}); 