import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled, { css } from 'styled-components';

import Container from '../common/Container';

const PageHeader = styled.div`
  ${(props) => props.fixed && css`
    position: fixed;
  `};

`;

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      {/* 這邊的判斷式是「條件 Render（conditional rendering）」 */}
      {/* {fixedHeader ? (
        <Header />
      ) : (
        <header>not a fixed Header</header>
      )} */}

      {/* PageHeader 的 fixed 為偵測是否有運用到 fixedHeader */}
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <Container>
        {/* children 為 props 的一種，主要是將其他的東西包在本地標籤之中 */}
        { children }
      </Container>
      <Footer />
    </div>
  )
}

export default DefaultLayout;