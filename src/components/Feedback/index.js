// Write your React code here.
import {Component} from 'react'

import './index.css'
import Emoji from '../Emoji/index'
import ThankYou from '../Thankyou/index'

class Feedback extends Component {
  state = {
    hideThanku: true,
  }

  emojiClicked = () => {
    const {hideThanku} = this.state
    this.setState({hideThanku: false})
  }

  render() {
    const {resources} = this.props
    const {hideThanku} = this.state
    console.log(resources.emojis)
    return (
      <div className="container">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support performance</h1>
          <li className="emoji-container">
            {!hideThanku ? (
              <ThankYou r={resources} />
            ) : (
              <Emoji r={resources} emojiClick={this.emojiClicked} />
            )}
          </li>
        </div>
      </div>
    )
  }
}
export default Feedback
