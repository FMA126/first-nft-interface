import { BigNumber } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import { Color__factory } from 'abis/types'
import { COLOR_RINKEBY_ADDRESS } from 'constants/chains'
import { useEffect, useState } from 'react'

export default function Collection() {
  const { active, account, activate, connector, deactivate, error, library } = useWeb3React()
  const [tried, setTried] = useState(false)
  const [bal, setBal] = useState<BigNumber | undefined>()
  useEffect(() => {
    async function fetchUserColorNfts() {
      try {
        const signer = library.getSigner(account)
        const ColorContract = Color__factory.connect(COLOR_RINKEBY_ADDRESS, signer)
        const colorBal = await ColorContract.balanceOf(account || '')
        setBal(colorBal)
      } catch (err) {
        console.error(err, 'Error fetching balance')
      }
    }
    if (!tried && active) {
      fetchUserColorNfts()
      setTried(true)
    }
  }, [tried, active, account, library])
  return (
    <>
      <h1>My Collection</h1>
    </>
  )
}
