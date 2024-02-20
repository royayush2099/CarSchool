import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <MainFooter>
      <h1>This is Footer Section.</h1>

    </MainFooter>
  )
}

const MainFooter = styled.footer`
 padding: 0 3.8rem;
 margin:0.3rem 2rem; 
 border-radius:0.6rem;
 background-color: ${({ theme }) => theme.colors.bg};
 border: 1px solid black;
 border-radius:0.8rem;
 text-align: center;

`;

export default Footer