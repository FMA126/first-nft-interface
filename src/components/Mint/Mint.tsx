import { useWeb3React } from '@web3-react/core'
import { Color__factory } from 'abis/types'
import { COLOR_RINKEBY_ADDRESS } from 'constants/chains'
import React from 'react'

export default function Mint() {
  const { active, account, activate, connector, deactivate, error, library } = useWeb3React()
  const ColorContract = Color__factory.connect(COLOR_RINKEBY_ADDRESS, library)
  console.log(library?.provider?.request())
  const handleMint = async () => {
    await ColorContract.getNewItem(account as string)
  }
  return (
    <>
      <div>Mint</div>
      <button onClick={handleMint}>Mint NFT</button>
    </>
  )
}
