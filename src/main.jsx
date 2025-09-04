import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import App from './App.jsx'
import Crew from './pages/Crew.jsx'
import Destination from './pages/Destination.jsx'
import Technology from './pages/Technology.jsx'
import DestinationDetails from './pages/DestinationDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='/destination' element={<Destination />}> 
          <Route index element={<Navigate to="moon" replace />} />
          <Route path=':planet' element={<DestinationDetails />} />      
        </Route>

        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
