import { useWeb3React } from '@web3-react/core'
import { Color__factory } from 'abis/types'
import { COLOR_RINKEBY_ADDRESS } from 'constants/chains'
import React from 'react'

export default function Mint() {
  const { active, account, activate, connector, deactivate, error, library } = useWeb3React()

  const handleMint = async () => {
    const signer = library.getSigner(account)
    const ColorContract = Color__factory.connect(COLOR_RINKEBY_ADDRESS, signer)
    await ColorContract.getNewItem(account || '')
  }
  return (
    <>
      <h1>Mint</h1>
      <button onClick={handleMint}>Mint NFT</button>
    </>
  )
}
