import React from 'react'
import { Text } from 'react-native'
import Field from 'ui/form/Field'
import Input from 'ui/form/Input'
import Button from 'ui/base/Button'


const ImportForm = props => {
  return (
    <>
      <Field control={Input} label='Número de medidor'/>

      <Field control={Input} label='Customer name'/>

      <Button title='Importar'/>
    </>
  )
}

export default ImportForm