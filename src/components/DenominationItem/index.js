import './index.css'

const DenominationItem = props => {
  const {denominationItem, updateBalance} = props
  const {value} = denominationItem
  const onIncrement = () => {
    updateBalance(value)
  }
  return (
    <li className="list-container">
      <button type="button" onClick={onIncrement}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
