import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from "../Alert";

test("submitted form", () => {
    render(<Alert />);
})