import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

const Hello = () => <h1>Hello World</h1>;

test('renders hello world', () => {
    render(<Hello />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
});
