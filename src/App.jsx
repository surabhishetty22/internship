
import './App.css'
import Demo from './components/Demo'
import Arrow from './components/Arrow'
import Array from './components/Array'
import Destruturing from './components/Destruturing'
import Spread from './components/Spread'
import Ternary from './components/Ternary'
import Props from './components/Props'
import Home from './components/Home'
import Error from './components/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MUI from './components/MUI'
import EmployeeCard from './components/EmployeeCard'
function App() {
//const mystyle={colr:"yellow",backgroundColor:"green"}
  return (
    // <div>
    //   <h2 style={{color:"red",backgroundColor:"blue"}}>My Name is Surabhi</h2>
    //   <h2 style={mystyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, facere.</h2>
    //   <Demo />
    //   <Arrow />
    //   <Array />
    //   <Destruturing />
    //   <Spread/>
    //   <Ternary/>
    //   <Props/>
    // </div>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/demo" element={<Demo />} />
  <Route path="/array" element={<Array />} />
  <Route path="/destruturing" element={<Destruturing />} />
  <Route path="/arrow" element={<Arrow />} />
  <Route path="/spread" element={<Spread />} />
  <Route path="/ternary" element={<Ternary />} />
  <Route path="/mui" element={<MUI />} />
  <Route path="/props" element={<Props />} />
  <Route path="/card" element={<EmployeeCard />} />
  <Route path="/*" element={<Error />} />
</Routes>
</BrowserRouter>


  )
}

export default App

