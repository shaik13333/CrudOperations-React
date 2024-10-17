import React from 'react'
import GetUsers from "./Pages/GetUsers"
import AddUsers from "./Pages/AddUsers"
import UpdateUsers from "./Pages/UpdateUser"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<GetUsers/>}/>
            <Route path='/add' element={<AddUsers/>}/>
            <Route path='/update/:id' element={<UpdateUsers/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
