import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TaskList from './TaskList'
import TaskDetail from './TaskDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  )
}

export default App


