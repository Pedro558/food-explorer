import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 10.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Content = styled.div`
  max-width: 136.8rem;
  height: 10.4rem;
  margin-inline: auto;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    transition: all 1s;

    svg {
      margin-top: .3rem;
      color: white;
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem;

    > button {
      display: none;
    } 
  }
`

export const Nav = styled.div`
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 40rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-inline: 4rem;
  padding-top: 5rem;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transform: ${({ isVisible }) => isVisible ? 'translateY(0)' :'translateY(-20%)'};

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  transition: all 0.4s;

  .header-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
    height: 0;

    margin-left: 3.2rem;

    flex-direction: row;
    align-items: center;
    background: none;

    opacity: 1;
    visibility: visible;

    transform: translateY(0);
    transition: all 0s;
  }

  @media (max-width: 768px) {
   > .header-buttons {
    flex-direction: column;
    > a {
      display: block;
      text-align: start;
      padding-left: 0px;
    }
    > button {
      display: flex;
      justify-content: start;
    }
   }
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  position: relative;

  > .text-logo span {
    display: block; 
    font-size: 1.2rem;
    text-align: end;
    color: #82F3FF;

    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      display: inline-block;
      right: -45px;
      top: 30%;
    }
  }
`

export const Favorites = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background: none;
  border: none;
  font-size: 1.6rem;
`
export const NewDish = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-inline: 1.2rem;
  border-radius: 0.5rem;
  height: 4.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-color: transparent;
    border-radius: 0;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};
  border-radius: 0.5rem;
  padding-right: 1.6rem;
  position: relative;

  > svg {
    left: 1.6rem;
    position: absolute;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;

    padding-left: 4.8rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 4.6rem;
  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    background-color: transparent;
    border-radius: 0;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};

    img {
      display: none;
    }
  }
`

export const Logout = styled(Link)`
  span {
    display: none;
  }
  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  } 

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    svg {
      display: none;
    }
    span {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: block;
    }
    
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }
`