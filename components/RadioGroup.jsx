import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import { main_color } from '../assets/styles'
const RadioGroup = (props) => {
  
  return (
    <View>
      {
        Object.keys(props.options).map(key => (
          <View>
            <Text style={{color:main_color}}>{key}</Text>
            {
              
             Object.keys(props.options[key]).map((e)=> <Text>A</Text>)
            }
          </View>
        ))
      }

    </View>

  )
}

export default RadioGroup
//{props.options.map((e) => <Text>{JSON.stringify(e)}</Text>)}