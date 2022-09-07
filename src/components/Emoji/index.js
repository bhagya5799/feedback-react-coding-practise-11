import React from 'react'

const index = ({r, emojiClick}) => {
  const {emojis} = r
  return (
    <div className="emoji">
      {emojis.map(emoji => (
        <li onClick={emojiClick} key={emoji.imageUrl}>
          <img src={emoji.imageUrl} alt={emoji.name} />
          <span>{emoji.name}</span>
        </li>
      ))}
    </div>
  )
}

export default index
