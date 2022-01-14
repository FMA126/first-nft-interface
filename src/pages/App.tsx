import './App.css'

import Wallet from 'components/Wallet/Wallet'
import Collection from 'pages/collection/Collection'
import Mint from 'pages/Mint/Mint'
import { Link, Route, Routes } from 'react-router-dom'

import Web3ReactManager from '../components/Web3ReactManager/Web3ReactManager'
import Home from './home/Home'

export default function App() {
  return (
    <Web3ReactManager>
      <main>
        <nav>
          <div className="nav-logo-container">
            <Link to="/">Colors NFT</Link>
          </div>
          <div className="nav-links-container">
            <Link to="/mint">Mint</Link>
            <Link to="/collection">My Collection</Link>
          </div>
          <div className="nav-wallet-container">
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
