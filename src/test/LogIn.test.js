// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LogIn from '../components/LogIn';
import { MemoryRouter } from 'react-router-dom';

describe('Test LogIn', () => {
    test('should render', () => {
      expect(render(<MemoryRouter><LogIn ></LogIn></MemoryRouter>)).toMatchSnapshot();
    }); 
    test("should render the basic fields", () => {
      render(<MemoryRouter><LogIn /></MemoryRouter>);
      expect(screen.getByLabelText('Correo Electrónico:')
      ).toBeInTheDocument();
      expect(screen.getByLabelText('Contraseña:')
      ).toBeInTheDocument();
    })
})