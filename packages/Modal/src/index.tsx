import React from 'react';
import styled from 'styled-components';
import { Button } from '@sirluggia/button';

const StyledModal = styled.div``;

export const Modal = () => {
  return (
    <StyledModal>
      <p>Some random text</p>
      <Button>Click here</Button>
    </StyledModal>
  );
};
