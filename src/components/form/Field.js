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

const Error = styled.Text`
  color: ${ getColor('status-error') };
  margin-top: 5px;
`

const Field = React.forwardRef(({ control: Component, label, children, error, ...rest }, ref) => {
  return (
    <Container>
      { label && <Label>{ label }</Label>}
      <Component ref={ ref } { ...rest }/>
      { error && <Error>{ error.message }</Error> }
    </Container>
  )
})

export default Field