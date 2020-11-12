import styled from 'styled-components';

import { LoginForm } from '../components/Forms/LoginForm';

export default function LoginPage() {
  return (
    <StyledContainer>
      <h1>Login</h1>
      <LoginForm />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;
