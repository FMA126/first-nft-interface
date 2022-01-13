import { useWeb3React } from '@web3-react/core'

export default function Wallet() {
  const wallet = useWeb3React()
  return (
    <div>
      <div>Wallet</div>
    </div>
  )
}
