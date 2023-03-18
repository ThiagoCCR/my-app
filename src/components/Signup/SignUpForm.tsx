import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { SignUpError } from '../../config/consts/errorMessages';
import { Wrapper } from '../HomePageWelcomeMessage/HomePageWelcomeMessage.styles';
import { StyledButton, StyledForm, StyledInput } from './SignUpForm.style';

export const SignUpForm: FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await setTimeout(() => {}, 3000);
      navigate('/home');
    } catch (err) {
      console.error(SignUpError);
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div>
        <StyledForm onSubmit={handleSignIn}>
          <StyledInput
            name="name"
            onChange={handleInputChange}
            placeholder="Nome"
            required
            type="text"
            value={formData.name}
          />
          <StyledInput
            name="email"
            onChange={handleInputChange}
            placeholder="E-mail"
            required
            type="email"
            value={formData.email}
          />
          <StyledInput
            name="password"
            onChange={handleInputChange}
            placeholder="Senha"
            required
            type="password"
            value={formData.password}
          />
          <StyledInput
            name="confirmPassword"
            onChange={handleInputChange}
            placeholder="Confirme a Senha"
            required
            type="password"
            value={formData.confirmPassword}
          />
          <StyledButton type="submit">ENTRAR</StyledButton>
          <Link to="/sign-in">
            <h2>Já tem uma conta? Faça o Login!</h2>
          </Link>
        </StyledForm>
      </div>
    </Wrapper>
  );
};
