export const getColor = name => props => {
  return props.theme.colors[name] || name;
}

const colors = {
  'brand': '#1256c4',
  'dark-1': '#002150',

  'grey-1': '#c6cbd4',

  'light-1': '#f6f7f9'
}

const theme = {
  colors
}

export default theme