import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../common/Container';

import MasterCard from '../../image/Mastercard-logo.png';
import Jcb from '../../image/jcb-logo.png';
import Visa from '../../image/visa-logo.png'
import Fami from '../../image/FamilyMart-logo.png';
import sevenEleven from '../../image/7-eleven-logo.png';
import HiLife from '../../image/HiLife-logo.png';
import OkMart from '../../image/okmart-logo.png';
import BlackCat from '../../image/黑貓-logo.png';
import ShopeeInk from '../../image/蝦皮直送包裝減量標章.png';
import QRcode from '../../image/shopeeQRcode.png';
import Apple from '../../image/AppStore.png';
import Google from '../../image/GooglePlay.png';
import Amazon from '../../image/AppGallery.png';

const StyledFooter = styled.footer`
  background-color: #FAFAFA;
  height: 500px;
  padding: 40px 0;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  font-size: 10px;
  margin-bottom: 16px;
  padding: 0 3%;

  a {
    margin-bottom: 4px;
    color: rgba( 0, 0, 0, .54);
  }
  a:hover {
    color: #d0011b;
  }

  @media screen and (min-width: 769px) {
    width: 20%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const FooterColTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 20px;
`;

const CvsLogo = styled.img`
  width: 30px;
  margin: 2px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexBox>
          <FooterCol>
            <FooterColTitle>客服中心</FooterColTitle>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>蝦皮商城</Link>
            <Link to='#!'>付款方式</Link>
            <Link to='#!'>蝦皮錢包</Link>
            <Link to='#!'>蝦幣</Link>
            <Link to='#!'>運費補助</Link>
            <Link to='#!'>退貨退款</Link>
            <Link to='#!'>延長訂單撥款</Link>
            <Link to='#!'>聯絡客服</Link>
            <Link to='#!'>防詐騙宣導</Link>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>關於蝦皮</FooterColTitle>
            <Link to='#!'>關於蝦皮</Link>
            <Link to='#!'>加入我們</Link>
            <Link to='#!'>蝦皮條款</Link>
            <Link to='#!'>隱私權政策</Link>
            <Link to='#!'>蝦皮商城</Link>
            <Link to='#!'>賣家中心</Link>
            <Link to='#!'>限時特賣</Link>
            <Link to='#!'>限時特賣</Link>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>付款</FooterColTitle>
            <FlexBox>
              <CvsLogo src={MasterCard} alt='' />
              <CvsLogo src={Jcb} alt='' />
              <CvsLogo src={Visa} alt='' />
            </FlexBox>

            <FooterColTitle>物流合作</FooterColTitle>
            <FlexBox>
              <CvsLogo src={sevenEleven} alt='' />
              <CvsLogo src={Fami} alt='' />
              <CvsLogo src={HiLife} alt='' />
              <CvsLogo src={BlackCat} alt='' />
              <CvsLogo src={OkMart} alt='' />
            </FlexBox>

            <FooterColTitle>蝦皮直送包裝減量標章</FooterColTitle>
            <CvsLogo src={ShopeeInk} alt='' />
          </FooterCol>

          <FooterCol>
            <FooterColTitle>關注我們</FooterColTitle>
            <Link to='#!'><i style={{ marginRight: 8 }} class="fa-brands fa-facebook"></i>Facebook</Link>
            <Link to='#!'><i style={{ marginRight: 8 }} class="fa-brands fa-instagram"></i>Instagram</Link>
            <Link to='#!'><i style={{ marginRight: 8 }} class="fa-brands fa-line"></i>Line</Link>
            <Link to='#!'><i style={{ marginRight: 8 }} class="fa-brands fa-linkedin"></i>LinkedIn</Link>
            <Link to='#!'><i style={{ marginRight: 8 }} class="fa-solid fa-lightbulb"></i>蝦品輯部落格</Link>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>下載蝦皮</FooterColTitle>
            <div style={{ display: 'flex'}}>
              <img src={QRcode} alt='' width={60} height={60} />
              <div>
                <img src={Apple} alt='' width={60} />
                <img src={Google} alt='' width={60} />
                <img src={Amazon} alt='' width={60} />
              </div>
            </div>
          </FooterCol>

        </FlexBox>
      </Container>
    </StyledFooter>
  );
}

export default Footer;