import './App.css'

import Collection from 'components/Collection/Collection'
import Mint from 'components/Mint/Mint'
import Wallet from 'components/Wallet/Wallet'
import { Link, Route, Routes } from 'react-router-dom'

import Web3ReactManager from '../components/Web3ReactManager/Web3ReactManager'
import Home from './Home'

export default function App() {
  return (
    <Web3ReactManager>
      <main>
        <nav>
          <div className="nav-logo">
            <Link to="/">Colors NFT</Link>
          </div>
          <div className="nav-links">
            <Link to="/mint">Mint</Link>
            <Link to="/collection">My Collection</Link>
          </div>
          <div className="nav-wallet">
            <Wallet />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
    </Web3ReactManager>
  )
}
