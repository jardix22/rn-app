import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import Field from 'ui/form/Field'
import Input from 'ui/form/Input'
import FilePicker from 'ui/form/FilePicker'
import Button from 'ui/base/Button'
import { RealmContext } from 'app/realm'

import Promise from 'promise'
import RNFetchBlob from 'rn-fetch-blob'
import csv  from 'csvtojson'

const getJsonData = file => {
  return new Promise((resolve, reject) => {
    RNFetchBlob.fs.readFile(file.uri, 'utf8')
      .then(rows => {
        csv({ output: "csv" })
          .fromString(rows)
          .then(data => resolve(data))
      })
      .catch(error => reject(error))
  })
}

const getFormatedData = arr => {
  const formatedData = arr.map(item => {
    const [
      locality_code,
      zone_code,
      book_code,
      supply_number,
      supply_code,
      name_customer,
      address_customer,
      electricmeter_number,
      month_number,
      accumulated_amount,
      type_action,
      last_cutoff,
      read_cutoff,
      date_cutoff,
      current_reading,
      date_reading,
      average_reading,
      previuos_reading,
      order_work,
    ] = item

    return {
      locality_code,
      zone_code,
      book_code,
      supply_number,
      supply_code,
      name_customer,
      address_customer,
      electricmeter_number,
      month_number,
      accumulated_amount,
      type_action,
      last_cutoff,
      read_cutoff,
      date_cutoff,
      current_reading,
      date_reading,
      average_reading,
      previuos_reading,
      order_work,
    }
  })

  return formatedData
}

const ImportForm = props => {
  const { register, setValue, handleSubmit, errors } = useForm()
  const realm = useContext(RealmContext)

  const onSubmit = async data => {
    return getJsonData(data.document).then(json => {
      const customers = getFormatedData(json)

      realm.write(() => {
        customers.forEach(customer => {
          realm.create('Customer', customer);
        })
      })
    })
  }

  return (
    <>
      <Field
        control={ FilePicker }
        ref={ register({ name: 'document' }, { required: 'Please select a file.' }) }
        onSelectFile={ file => setValue('document', file, true) }
        error={ errors.document }
      />

      <Field
        control={ Input }
        label='Customer name'
        ref={ register({ name: 'customer_name' }, { required: 'This field is required.' }) }
        onChangeText={ text => setValue('customer_name', text, true) }
        error={ errors.customer_name }
      />

      <Button
        title='Importar'
        onPress={ handleSubmit(onSubmit) }
      />
    </>
  )
}

export default ImportForm