import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './TaskDetail.css'

const TaskDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="task-detail">
      <h1>Task Detail</h1>
      <p>Task ID: {id}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default TaskDetail
