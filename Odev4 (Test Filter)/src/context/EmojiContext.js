
import { emojidata } from '../data/emoji'
import { createContext, useContext, useState } from "react";

const EmojiContext = createContext();
export const EmojiProvider = ({ children }) => {

    const [emojies, setEmojies] = useState(emojidata);
    const [text, setText] = useState("");

    const values = {
        emojies, setEmojies, setText, text
    }
    return (
        <EmojiContext.Provider value={values}>
            {children}
        </EmojiContext.Provider>
    )
}
export const useEmoji = () => useContext(EmojiContext)