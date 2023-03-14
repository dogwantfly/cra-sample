import { memo } from 'react';
import { Link } from '@mui/material';
import styled from 'styled-components';


const Footer = styled.footer`
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    font-size: 14px;
`;


const AppFooter = memo(() => {
  console.log('update')
  return (
    <Footer>
      
      Copyright ©
      &ensp;
      <Link color="inherit" href="https://www.abc.com.tw/">
        ABC Co. Ltd.
      </Link>
          &ensp;
      {new Date().getFullYear()}
    </Footer>
  );
});


export default AppFooter;