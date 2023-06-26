import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input {
    height: 4.8rem;
    padding: 1.4rem;

    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 1.6rem;
    }
  }
`