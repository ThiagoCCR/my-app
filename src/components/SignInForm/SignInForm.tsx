import { FC, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginError } from '../../config/consts/errorMessages';
import { signIn } from '../../services/authService';
import { Wrapper } from '../HomePageWelcomeMessage/HomePageWelcomeMessage.styles';
import { StyledButton, StyledForm, StyledInput } from './SignInForm.style';

export const SignInForm: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const userData = await signIn(email, password);
      const infoJSON = JSON.stringify({
        token: userData.access_token,
        studentId: userData.aluno_id,
      });
      localStorage.setItem('writer', infoJSON);
      navigate('/userpage');
    } catch (err) {
      console.error(LoginError);
    }
  };

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
        </StyledForm>
      </div>
    </Wrapper>
  );
};
