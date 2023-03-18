import { FC, FormEventHandler, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';

import { LoginError } from '../../config/consts/errorMessages';
import { Wrapper } from '../HomePageWelcomeMessage/HomePageWelcomeMessage.styles';
import { StyledButton, StyledForm, StyledInput } from './SignInForm.style';

interface AuthModel {
  user: string;
  token: string;
}

export const SignInForm: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = JSON.parse(localStorage.getItem('writer') || '{}') as AuthModel;
  const navigate = useNavigate();

  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await setTimeout(() => {}, 3000);
      navigate('/home');
    } catch (err) {
      console.error(LoginError);
    }
  };

  if (auth.token) {
    return <Navigate to="/home" />;
  }

  return (
    <Wrapper>
      <div>
        <StyledForm onSubmit={handleSignIn}>
          <StyledInput
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            type="email"
            value={email}
          />
          <StyledInput
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            type="password"
            value={password}
          />
          <StyledButton type="submit">ENTRAR</StyledButton>
          <Link to="/sign-up">
            <h2>Primeira Vez? Cadastre-se!</h2>
          </Link>
        </StyledForm>
      </div>
    </Wrapper>
  );
};
