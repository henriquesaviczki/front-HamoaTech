'use client';
import styled from "styled-components";

export const Navbar = styled.div`
    padding: 10px;
    background-color: #0F1013;
    width: '20px';
    height: '20px';
    
    header {    
        display: flex;

        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
    }
  `;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80px;
    height: 35.56px;
    left: 200px;
`;

export const LogoContainer = styled.div`
    flota: left;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const MenuList = styled.div`
    
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;
`;

export const MenuItem = styled.div`
    padding: 10px;
    justify-content: center;
    align-items: center;
    top: 20px;
`;
