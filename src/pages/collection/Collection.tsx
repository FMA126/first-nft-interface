import './Collection.css'

import { BigNumber } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import { Color__factory } from 'abis/types'
import { COLOR_RINKEBY_ADDRESS } from 'constants/chains'
import { useEffect, useState } from 'react'

export default function Collection() {
  const { active, account, library } = useWeb3React()
  const [tried, setTried] = useState(false)
  const [bal, setBal] = useState<BigNumber | undefined>()
  const [images, setImages] = useState<any[]>([])
  useEffect(() => {
    async function fetchUserColorNfts() {
      try {
        const signer = library.getSigner(account)
        const ColorContract = Color__factory.connect(COLOR_RINKEBY_ADDRESS, signer)
        const colorBal = await ColorContract.balanceOf(account || '')
        const opeaSeaRes = await fetch(
          `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=0x02E64Dc9C99FA1b09B9b820d4f9cc65191ef7994&order_direction=desc&offset=0&limit=20`,
          { method: 'GET' }
        )
        const response = await opeaSeaRes.json()
        const jsonResponse = await response
        setBal(colorBal)
        setImages(jsonResponse.assets)
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
      {bal && <div>Number of NFTs collected: {bal.toString()}</div>}
      <div className="nft-image-collection">
        {images.length > 0 &&
          images.map((image) => (
            <div key={image.id} className="nft-image-wrapper">
              <img alt="Color NFT" src={image.image_original_url} />
              <div>Index: {image.token_id}</div>
              <div>
                Contract:{' '}
                <a target="_blank" href={image.permalink} rel="noreferrer">
                  View on OpenSea
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
