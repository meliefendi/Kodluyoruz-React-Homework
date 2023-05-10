
import React, { useEffect } from 'react'
import { useEmoji } from '../../context/EmojiContext'

const SearchInput = () => {
    const { text, setText } = useEmoji();
    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {

        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [text])

    return (
        <>
            <form>
                <input placeholder='Search emoji' className='search-input'
                    value={text} type="text" onChange={handleChange} />
            </form>
        </>
    )
}

export default SearchInput