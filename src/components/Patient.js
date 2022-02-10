import React from 'react'
import { Text } from 'react-native'

const Patient = ({item}) => {

    const {patient, date} = item
console.log(item)
  return (
    <Text>{patient}</Text>
  )
}

export default Patient