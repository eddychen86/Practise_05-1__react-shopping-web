import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container'

const StyledHeader = styled.header`
  background-color: #AA2F1F;
  height: 150px;
  width: 100vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        This is a Header
      </Container>
    </StyledHeader>
  );
}

export default Header;