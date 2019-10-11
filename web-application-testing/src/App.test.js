import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App';



afterEach(rtl.cleanup);


test('Strike to be 0 or more', () => {
    const wrapper = rtl.render(<App />);
    const element = wrapper.queryByRole(/strike/i);
    expect(parseInt(element.innerHTML)).toBeGreaterThanOrEqual(0);
})

test('Balls to be 0 or more', () => {
    const wrapper = rtl.render(<App />);
    const element = wrapper.queryByRole(/ball/i);
    expect(parseInt(element.innerHTML)).toBeGreaterThanOrEqual(0);
})

test('Strikes to be no more than 3', () => {
    const wrapper=rtl.render(<App />);
    const element = wrapper.queryByRole(/strike/i);
    expect(parseInt(element.innerHTML)).toBeLessThanOrEqual(3);
})

test('Balls to be equal or less than 4', () => {
    const wrapper =rtl.render(<App />);
    const element = wrapper.queryByRole(/ball/i);
    expect(parseInt(element.innerHTML)).toBeLessThanOrEqual(4);
})







