import React from 'react'
import styled from 'styled-components/native'
import { getColor } from '@theme'

const Input = styled.TextInput`
  color: ${getColor('dark-1')};
  background: ${getColor('light-1')};
  border-radius: 4px;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
`

export default Input