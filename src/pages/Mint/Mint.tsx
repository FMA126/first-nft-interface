import { useWeb3React } from '@web3-react/core'
import { Color__factory } from 'abis/types'
import { COLOR_RINKEBY_ADDRESS } from 'constants/chains'
import React from 'react'

export default function Mint() {
  // { active, account, activate, connector, deactivate, error, library }
  const { active, account, library } = useWeb3React()

  const handleMint = async () => {
    const signer = library.getSigner(account)
    const ColorContract = Color__factory.connect(COLOR_RINKEBY_ADDRESS, signer)
    await ColorContract.getNewItem(account || '')
  }
  if (!active) {
    return (
      <>
        <div>Please download MetaMask</div>
      </>
    )
  }
  return (
    <>
      <h1>Mint</h1>
      <button onClick={handleMint}>Mint NFT</button>
    </>
  )
}
