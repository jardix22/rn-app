import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { getColor } from '@theme'


const StyledTouchable = styled.TouchableOpacity`
  background-color: ${getColor('brand')};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 5px 15px;
`

const StyledLabel = styled.Text`
  color: ${getColor('white')};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`

const Button = ({ title, ...rest }) => {
  return (
    <StyledTouchable { ...rest }>
      <StyledLabel>{ title }</StyledLabel>
    </StyledTouchable>
  )
}

export default Button