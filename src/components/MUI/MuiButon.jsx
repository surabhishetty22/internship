import { Button } from '@mui/material'
import React from 'react'

export default function MuiButon() {
  return (
    <div>
<Button variant="text">Text</Button> <br />
<br />
<Button variant="contained" sx={{backgroundColor:"blue"}}color="error">Contained</Button> <br />
<br />
<Button variant="outlined" color="success">Outlined</Button> <br />
    </div>
  )
}
