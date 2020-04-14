import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import { RealmContext } from 'app/realm'

import Heading from 'ui/base/Heading'
import Box from 'ui/base/Box'

const CustomerCard = ({ name_customer }) => {
  return (
    <View>
      <Text>{ name_customer }</Text>
    </View>
  )
}

const getFormatedCustomers = customers => {
  return Object.keys(customers).map(key => {
    const data = customers[key]

    return {
      id: key,
      ...data
    }
  })
}

const List = props => {
  const realm = useContext(RealmContext)

  const customersRaw = realm.objects('Customer');
  const customers = getFormatedCustomers(customersRaw)

  return (
    <Box>
      <Heading>Clientes</Heading>
      { customers.map(data => <CustomerCard { ...data } />) }
    </Box>
  )
}

export default List