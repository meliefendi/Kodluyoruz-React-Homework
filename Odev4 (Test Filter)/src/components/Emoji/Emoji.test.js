import { screen, render } from '@testing-library/react'
import App from '../../App';
import EemojiResult from "./EmojiResult";

describe('Emoji Test Area', () => {
    render(<App />)
    test("Render If elements ok", () => {
        const items = screen.getAllByTestId("row");
        expect(items.length).toEqual(42);
    })
   
    // test('should render emojis based on the filter text', () => {
    //     // Render EmojiResult component
    //     render(
    //       <EmojiProvider>
    //         <EmojiResult />
    //       </EmojiProvider>
    //     );
    
    //     const filterInput = screen.getByPlaceholderText('Search emoji');
    //     fireEvent.change(filterInput, { target: { value: 'smi' } });
    //     const filteredEmojis = screen.getAllByTestId('emoji-list');
    //     expect(filteredEmojis.length).toBe(4);
    //   });
        // test('Clicking on an emoji copies it to clipboard', async () => {
        //   const { getByText } = render(<EemojiResult />);
        //   const emojiTitle = 'smiling face with heart-eyes'; // Burada tıklanacak emoji'nin başlığını seçin
        //   const emoji = getByText(emojiTitle);
      
        //   await fireEvent.click(emoji);
        //   const clipboardContent = await navigator.clipboard.readText();
      
        //   expect(clipboardContent).toEqual(emoji.textContent);
        // });
      

})