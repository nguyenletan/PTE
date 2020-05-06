import React from 'react'
import { theme } from 'docz'

const Theme = ({ children }) => <div>{children}</div>

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
}

export default theme(themeConfig)(Theme)