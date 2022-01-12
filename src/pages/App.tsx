import Mint from 'components/Mint'
import { Route, Routes } from 'react-router-dom'

import Web3ReactManager from '../components/Web3ReactManager'
import Home from './Home'

export default function App() {
  return (
    <Web3ReactManager>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </Web3ReactManager>
  )
}
