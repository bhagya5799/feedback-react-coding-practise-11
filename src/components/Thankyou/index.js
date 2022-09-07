import React from 'react'

import './index.css'

const Thankyou = ({r}) => {
  const {loveEmojiUrl} = r
  return (
    <div className="thank-card">
      <img src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You</h1>
      <p>we will use feedback</p>
    </div>
  )
}

export default Thankyou
