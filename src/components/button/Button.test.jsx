/* eslint-disable no-unused-vars */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../../components/button/Button';

import { describe, test, jest, expect } from '@jest/globals';

describe('Button', () => {
    test('should call onClick when button is clicked', () => {
        // Mock the onClick function
        const onClickMock = jest.fn();

        // Render the component
        const { getByText } = render(
          <Button onClick={onClickMock} text="Ingresar" />
        );

        // Find the button element and simulate a click event
        const button = getByText('Ingresar');
        fireEvent.click(button);

        // Assert that onClick has been called
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
})