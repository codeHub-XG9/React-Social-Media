import React from 'react'
import './message.scss'
import { format } from 'timeago.js'
const Message = ({ message, own }) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="MsgTop">
                <img src="data:image/jpeg;base64,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" alt="" className='msgImg' />
                <span className='msgTxt'>{message.text}</span>
            </div>
            <div className="MsgBottom">
                <span>{format(message.createdAt)}</span>
            </div>
        </div>
    )
}

export default Message