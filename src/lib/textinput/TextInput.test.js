//src/lib/components/TextInput.test.js
import React from "react";
import TextInput from "./TextInput";
import { render, screen } from '@testing-library/react';
describe("TextInput", () => {
  it("renders properly", () => {
    render(<TextInput label="Email" placeholder="name@example.com" />);
    const linkElement = screen.getByText(/Email/i);
    expect(linkElement).toBeInTheDocument();
  });
});