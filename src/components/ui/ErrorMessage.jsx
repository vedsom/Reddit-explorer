import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 1rem;
  background-color: #FEE2E2;
  border: 1px solid #FECACA;
  border-radius: 0.375rem;
  color: #DC2626;
`;

const ErrorMessage = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorMessage;
