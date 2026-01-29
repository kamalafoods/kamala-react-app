import { useNavigate } from 'react-router-dom'

import './notfound.css'

export default function NotFound () {
  const navigate = useNavigate()
  
  const handleReturnHome = () => {
    navigate('/')
  }
  return (
     <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
    <h1 className="notfound-text">Not Found</h1> 
    <button className= "btn-neon" onClick={handleReturnHome} >Return to home</button>
  </div>
  )
}