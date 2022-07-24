import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import ModalTawar from "../ModalTawar";

test("submitted input price", () => {
    render(<ModalTawar />);
    const inputPrice = screen.getByTestId("input-price");

    fireEvent.change(inputPrice, { target: { value: 0 } });
    expect(inputPrice.value).toBe("0");
})