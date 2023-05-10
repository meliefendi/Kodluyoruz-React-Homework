import { render, screen } from "@testing-library/react"
import App from '../../App'

test("Başlık kısmı başarılı bir şekilde render edildi mi", () => {
    render(<App />)
    const headerTitle = screen.getByText(/emoji/i)
    expect(headerTitle).toBeInTheDocument();
})