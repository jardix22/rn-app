const Schema = {
  name: 'Customer',
  properties: {
    locality_code: 'string',
    zone_code: 'string',
    book_code: 'string',
    supply_number: 'string',
    supply_code: 'string',
    name_customer: 'string',
    address_customer: 'string',
    electricmeter_number: 'string',
    month_number: 'string',
    accumulated_amount: 'string',
    type_action: 'string',
    last_cutoff: 'string',
    read_cutoff: 'string',
    date_cutoff: 'string',
    current_reading: 'string',
    date_reading: 'string',
    average_reading: 'string',
    previuos_reading: 'string',
    order_work: 'string',
  },
}

export default Schema