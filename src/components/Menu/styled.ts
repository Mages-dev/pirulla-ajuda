import styled from 'styled-components';

export const MenuBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.fnWhite};
  z-index: 1000;
  padding-left: 150px;
`;

export const MenuLogo = styled.img`
  position: absolute;
  width: 180px;
  height: auto;
  top: 5px;
  left: 10px;
  z-index: 2;
  opacity: 0;
  @media (max-width: 768px) {
    width: 100px;
  }`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: flex-end;
  flex-grow: 1;
  margin-right: 16px;
`;

export const MenuItem = styled.div`
  color: black;
  user-select: none;
`;

export const Text = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  font-size: clamp(1.5rem, 2vw, 1.5rem);
  user-select: none;
  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.5vw, 1rem);
    text-align: right;
  }
`;