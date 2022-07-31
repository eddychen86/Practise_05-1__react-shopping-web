// import React from 'react';
import styled from 'styled-components';

const ClearFix = styled.div`
  /* 這裡使用 props 這樣設定的用意為，HomePage 的 <ClearFix /> 內如果有設定 height 的話，那就會覆蓋這邊的設定 */
  /* HomePage.js EX: <ClearFix height='300px' /> */
  height: ${ (props) => props.height || '150px' };
`;

export default ClearFix;