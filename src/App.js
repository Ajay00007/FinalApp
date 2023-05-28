import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Router>
<Routes>
< Route exact path="/" element={<Home />} />
{/* <Route exact path="/employe" element={<EmployeeList />} /> */}
{/* <Route exact path="/AddEmployee" element={<AddEmployee />} /> */}
{/* <Route exact path="/editEmployee" element={<EditEmployee />} /> */}
</Routes>
</Router>
    </div>
  )
}

export default App
