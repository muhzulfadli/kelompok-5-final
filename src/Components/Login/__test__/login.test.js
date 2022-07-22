import { render, screen, fireEvent } from '@testing-library/react'

import Form from '../../../Components/Login/Form'

const mockSetFormFnc = jest.fn()

test('Form login input field typed', () => {
    render(<Form setForm={mockSetFormFnc} />)
    const inputElement = screen.getByTestId('form-login-field')
    
    expect(inputElement.value).toBe('Membeli mie ayam')
})