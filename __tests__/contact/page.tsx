import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactPage from '@/app/contact/page'

describe('ContactPage', () => {
  it('Renders the contact form', () => {
    render(<ContactPage />)
    expect(screen.getAllByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('Shows validation errors when fields are empty', async () => {
    const user = userEvent.setup()
    render(<ContactPage />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    expect(await screen.findAllByText(/required/i)).toHaveLength(3)
  })
})