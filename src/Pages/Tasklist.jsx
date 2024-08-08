import React from 'react'
import Navbar from '../Compponents/Navbar'
import Items from '../Compponents/Items'
import Dialog from '../Compponents/Dialog' 
import Taskdetails from '../Compponents/Taskdetails' 

function Tasklist() {
  return (
    <div>
      <Navbar/>
        < Items />
        <Dialog/>
        <Taskdetails/>
    </div>
  )
}

export default Tasklist