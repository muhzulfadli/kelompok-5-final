import { render, screen, fireEvent } from '@testing-library/react'

import Form from '../../../Components/Login/Form'

const mockSetFormFnc = jest.fn()

test('Form login input field typed', () => {
    render(<Form setForm={mockSetFormFnc} />)
    const inputElement = screen.getByTestId('form-login-field')
    fireEvent.change(inputElement, { target: { value: 'johndee@gmail.com' } })
    
    expect(inputElement.value).toBe('johndee@gmail.com')
})