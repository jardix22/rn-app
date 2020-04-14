export const getColor = name => props => {
  return props.theme.colors[name] || name;
}

const colors = {
  'brand': '#1256c4',
  'dark-1': '#002150',

  'grey-1': '#c6cbd4',

  'light-1': '#f6f7f9',


  'border': 'rgba(34,36,38,.15)',

  'status-critical': '#FF4040',
  'status-error': '#FF4040',
  'status-warning': '#FFAA15',
  'status-ok': '#00C781',
  'status-unknown': '#CCCCCC',
  'status-disabled': '#CCCCCC',
}

const theme = {
  colors
}

export default theme