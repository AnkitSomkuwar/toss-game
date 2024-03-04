// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalToss: 0,
    headsTotal: 0,
    tailTotal: 0,
    isHead: true,
  }

  onTossGenerate = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        tailTotal: prevState.tailTotal + 1,
        totalToss: prevState.totalToss + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        headsTotal: prevState.headsTotal + 1,
        totalToss: prevState.totalToss + 1,
      }))
    }
  }

  render() {
    const {totalToss, headsTotal, tailTotal, isHead} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <div className="img-container">
            <img src={srcImage} className="Coin-img" alt="toss result" />
          </div>
          <div className="btn-area">
            <button
              onClick={this.onTossGenerate}
              type="button"
              className="toss-btn"
            >
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="count">Total: {totalToss}</p>
            <p className="count">Heads: {headsTotal}</p>
            <p className="count">Tails: {tailTotal}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
