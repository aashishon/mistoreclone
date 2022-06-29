import React from 'react'
import Videocard from './Videocard.js'
import "../styles/Videos.css"

const Videos = ({videos}) => {
  return (
    <div className="video">
        {videos.map((item,index)=>{
            return (
            <Videocard image = {item.image} name = {item.name} index={index} key={item.image} />
            )
        })}
    </div>
  )
}

export default Videos