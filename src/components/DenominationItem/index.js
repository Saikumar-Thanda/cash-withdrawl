import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props
  const {value} = denominationDetails
  const updateBalance = () => {
    updatedBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={updateBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
