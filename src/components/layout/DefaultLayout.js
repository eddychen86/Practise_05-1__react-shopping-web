import React from 'react';
import Header from './Header';
import styled, { css } from 'styled-components';

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
      {/* children 為 props 的一種，主要是將其他的東西包在本地標籤之中 */}
      { children }
      <footer>Footer</footer>
    </div>
  )
}

export default DefaultLayout;