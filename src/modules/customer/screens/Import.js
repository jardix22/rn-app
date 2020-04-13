import React from 'react'
import { View } from 'react-native'

import ImportForm from '../forms/Import'

import Heading from 'ui/base/Heading'
import Box from 'ui/base/Box'


const Import = props => {
  return (
    <Box>
      <Heading>Importar Clientes</Heading>
      <ImportForm />
    </Box>
  )
}

export default Import