import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  >label{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  
  > select{
    height: 4.8rem;
    padding: 1.4rem;

    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};

    appearance: none;
    background-image: url("/src/assets/seta.svg");
    background-repeat: no-repeat;
    background-position: right 2rem top 50%;
    background-size: 1.6rem auto;
  }
`