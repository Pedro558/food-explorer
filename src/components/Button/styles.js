import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.6rem;
  border: none;
  border-radius: 0.5rem;
  padding: 3rem;

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


`;
