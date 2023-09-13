// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <h1 className="profile">S</h1>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-cont">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-check">
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="instruction">CHOOSE SUM (IN RUPEES)</p>
          <ul className="container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationItem={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
