import React from 'react';
import Logo from '../../image/logo.png';
import styled from 'styled-components';
import Container from '../common/Container';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #d0011b;
  padding: 8px 0;
  width: 100vw;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0 10px;
    border-right: 1px solid white;
    
    a {
      color: white;
      text-decoration: none;
    }
  }
  li:first-child {
    padding-left: 0;
  }
  li:last-child {
    padding-right: 0;
    border: 0px;
  }
`;

const onSearch = (value) => console.log(value);

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderSection>
          <StyledNav>
            <li><a href="#!">蝦皮購物</a></li>
            <li><a href="#!">下載</a></li>
            <li><a href="#!">追蹤我們</a></li>
            <li><a href="#!">蝦品輯部落格</a></li>
          </StyledNav>
          <StyledNav>
            <li><a href="#!">通知</a></li>
            <li><a href="#!">幫助中心</a></li>
            <li><a href="#!">帳號</a></li>
          </StyledNav>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to='/'>
            <img src={Logo} alt="logo" height={80} />
          </Link>
          <FlexBox>
            <Input.Search
              style={{ marginRight: 20, }}
              placeholder="在商城搜尋"
              onSearch={onSearch}
              enterButton
            />
            <Link to='/cart'>
              <ShoppingCartOutlined style={{ fontSize: 28, color: 'white', }} />
            </Link>
          </FlexBox>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  );
}

export default Header;