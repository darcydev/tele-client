import styled from 'styled-components';

import { RegisterForm } from '../components/Forms/RegisterForm';

export default function LoginPage() {
  return (
    <StyledContainer>
      <h1>Login</h1>
      <RegisterForm />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;
