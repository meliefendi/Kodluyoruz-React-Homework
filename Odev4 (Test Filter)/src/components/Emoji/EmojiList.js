import React, { useState } from 'react'

const EmojiList = ({ emoji }) => {
    const [symbol, setSymbol] = useState("");
    const handleClick = (symbol) => {
        setSymbol(symbol)
        navigator.clipboard.writeText(symbol)
    }
    return (
        <ul className='emoji-list'>
            <li data-testid="row">
                <div className="text">
                    <span className='symbol'>{emoji?.symbol}</span>
                    <span className='title'>{emoji?.title}</span>
                </div>

                <span className='copy' onClick={() => handleClick(emoji.symbol)}>Copy to clipboard</span>
            </li>
        </ul>
    )
}

export default EmojiList