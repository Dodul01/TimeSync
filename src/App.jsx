import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'

function App() {

  return (
    <div className='bg-[#14181e] text-[#f0f0f0] min-h-screen min-w-full'>
      {/* <h1 className="text-3xl font-bold underline bg-[#0b0e11] text-white">
        TimeSync
      </h1> */}
      <Nav/>
      <Outlet></Outlet>
    </div>
  )
}

export default App
