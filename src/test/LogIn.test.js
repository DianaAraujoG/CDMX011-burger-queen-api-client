// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import  FormLogIn  from '../components/LogIn/FormLogIn';
import { MemoryRouter } from 'react-router-dom';
import LogIn from '../components/LogIn/LogIn'

describe('Test LogIn', () => {
    test('should render', () => {
      expect(render(<MemoryRouter><LogIn></LogIn></MemoryRouter>)).toMatchSnapshot();
    }); 
    test("should render the basic fields", () => {
      render(<MemoryRouter><LogIn></LogIn></MemoryRouter>);
      expect(screen.getByLabelText('Correo Electrónico:')
      ).toBeInTheDocument();
      expect(screen.getByLabelText('Contraseña:')
      ).toBeInTheDocument();
    });
    test("Form logIn", ()=> {
      const mockLogIn = jest.fn();

      render(<FormLogIn saveData={mockLogIn}/>);
      const email = screen.getByLabelText('Correo Electrónico:');
      const password = screen.getByLabelText('Contraseña:');
      const btn = screen.getByText('Enviar');

      const emailValue = 'LUNA@correo.com';
      const passValue = 'lunaluna';

      fireEvent.change(email , {target:{value: emailValue}});
      fireEvent.change(password , {target:{value: passValue}});
      fireEvent.click(btn);

      expect(mockLogIn).toBeCalledWith(emailValue, passValue);
    })
})