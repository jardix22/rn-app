import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import { getColor } from '@theme'

const Container = styled.View`
  margin-bottom: 15px;
`

const Label = styled.Text`
  color: ${ getColor('grey-1') };
  font-weight: bold;
  margin-bottom: 5px;
`

const Field = React.forwardRef(({ control: Component, label, children, ...rest }, ref) => {
  return (
    <Container>
      <Label>{ label }</Label>
      <Component ref={ ref } { ...rest }/>
    </Container>
  )
})

export default Field