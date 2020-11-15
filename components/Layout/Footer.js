import { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

import { logout } from '../../lib/auth';

import AppContext from '../../context/AppContext';
import { LeftNavMenu, RightNavMenu } from '../Navigation/NavMenu';

export const Footer = () => {
  const { user, isAuth, setUser } = useContext(AppContext);

  return (
    <>
      <StyledFooter>
        <div className='content'>
          <div className='left'>
            <h3>INSERT COMPANY NAME</h3>
            <div className='links-wrp'>
              <LeftNavMenu />
              <RightNavMenu />
            </div>
          </div>
          <div className='right'>
            <h3>Connect with us</h3>
            INSERT NEWSLETTER SUBSCRIBE
            <div className='social-links-wrp'>
              <FaInstagramSquare />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
      </StyledFooter>
      <script
        async
        src='https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js'
      ></script>
      <div
        id='snipcart'
        data-api-key='Njc3ZjNlMmQtZTNkOS00YzNiLTk3ZmMtMWUzZmJiY2Q1NDZhNjM3NDA5MDUzMzkzNTUzMTUx'
        hidden
      ></div>
    </>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 80px;
  background: #000;

  h3 {
    color: #fff;
    font-size: 30px;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      .links-wrp {
        a {
          margin-left: 0;
        }
      }
    }

    .right {
      svg {
        color: white;
        width: 30px;
        height: auto;
      }
    }
  }
`;
