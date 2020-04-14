import React, { useState } from 'react'
import styled from 'styled-components/native'
import DocumentPicker from 'react-native-document-picker'

import { getColor } from '@theme'
import { exp } from 'react-native-reanimated'
import { StyleSheet, View } from 'react-native'

const Container = styled.TouchableOpacity`
  border: 2px dashed ${getColor('border')};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 20px;
`

const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

const Details = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`

const Size = styled.Text`
  font-size: 14px;
`

const formatSize = size => {
  const areBytes = size <= 1000
  const unit = areBytes ? 'B' : 'kB'
  const value = areBytes ? size : (size/1000).toFixed(2)

  return `${value} ${unit}`
}

const FilePicker = React.forwardRef(({ onSelectFile }, ref) => {
  const [data, setData] = useState(undefined)

  const selectFile = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [ DocumentPicker.types.allFiles ],
      })

      setData(file)
      onSelectFile(file)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker')
      } else {
        alert('Unknown Error: ' + JSON.stringify(err))
        throw err
      }
    }
  }

  return (
    <Container onPress={selectFile} activeOpacity={0.8} ref={ ref }>
      { !data && <Label>Browse file</Label> }
      { data && (
        <Details>
          <Name>{ data.name }</Name>
          <Size>{ formatSize(data.size) }</Size>
        </Details>
      ) }
    </Container>
  )
})


export default FilePicker