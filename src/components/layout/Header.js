import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #AC2F27;
  height: 150px;
  width: 100vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      This is a Header
    </StyledHeader>
  );
}

export default Header;