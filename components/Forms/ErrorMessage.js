import styled from 'styled-components';

export const ErrorMessage = ({ message }) => <StyledSpan>{message}</StyledSpan>;

const StyledSpan = styled.span`
  font-size: 12px;
  color: red;
`;
