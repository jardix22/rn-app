import React from 'react'
import styled from 'styled-components/native'
import { getColor } from '@theme'

const Heading = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${getColor('dark-1')};
`

export default Heading