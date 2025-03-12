import React from 'react'
import MuiButon from './MUI/MuiButon'
import Muitable from './MUI/Muitable'
import MuiDialog from './MUI/MuiDialog'
import MuiAlert from './MUI/MuiAlert'
import MuiBackdrop from './MUI/MuiBackdrop'
export default function MUI() {
  return (
    <div>MUI
        <MuiButon /> <br/>
        <Muitable />
        <MuiDialog/>
        {/* <MuiAlert /> */}
        <MuiBackdrop />
    </div>
  )
}
